/**
 * Submit handler shared by the quote form and the job application form.
 *
 * Both post the same way — a FormData POST to Web3Forms, which relays to
 * info@metalholland.com and stores nothing. Everything language- or
 * page-specific arrives as a data attribute on the <form>, so this file holds
 * no copy:
 *
 *   data-endpoint        where to post
 *   data-msg-subject     subject prefix, e.g. "Job application"
 *   data-subject-field   name of the field appended to the subject
 *   data-msg-sending / -success / -error
 *
 * Status and fallback elements are looked up inside the form, so two forms on
 * one page would not fight over each other.
 */
export function initWeb3Forms() {
  const forms = document.querySelectorAll<HTMLFormElement>('[data-web3-form]');

  forms.forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const fallback = form.querySelector<HTMLElement>('[data-form-fallback]');

    const setStatus = (text: string, tone: 'ok' | 'error' | 'idle' = 'idle') => {
      if (status) {
        status.textContent = text;
        status.className =
          'mt-4 text-sm sm:mt-0 ' +
          (tone === 'ok'
            ? 'text-arc-400'
            : tone === 'error'
              ? 'text-flame-400'
              : 'text-steel-400');
      }
      // The address is offered only when sending failed, so a working form
      // never nudges people towards email instead.
      if (fallback) fallback.hidden = tone !== 'error';
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = new FormData(form);

      // A subject naming the sender beats one identical line per message,
      // and replies should go to the person who wrote, not to ourselves.
      const subjectField = form.dataset.subjectField ?? 'company';
      const who = data.get(subjectField);
      data.set(
        'subject',
        who ? `${form.dataset.msgSubject} — ${who}` : `${form.dataset.msgSubject}`
      );
      data.set('replyto', String(data.get('email') ?? ''));

      const button = form.querySelector('button[type="submit"]');
      button?.setAttribute('disabled', 'true');
      setStatus(form.dataset.msgSending ?? '', 'idle');

      try {
        const response = await fetch(form.dataset.endpoint ?? '', {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        // Web3Forms answers with { success: boolean, message: string }, and
        // a rejected key or a tripped honeypot arrives as a 4xx.
        const result = await response.json().catch(() => null);
        if (!response.ok || result?.success === false) {
          throw new Error(result?.message ?? String(response.status));
        }

        form.reset();
        setStatus(form.dataset.msgSuccess ?? '', 'ok');
      } catch {
        setStatus(form.dataset.msgError ?? '', 'error');
      } finally {
        button?.removeAttribute('disabled');
      }
    });
  });
}
