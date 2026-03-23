'use client';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  email: string;
  company?: string;
  type: string;
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    // In production, this would send to an API route
    await new Promise(r => setTimeout(r, 1000));
    console.log(data);
  }

  if (isSubmitSuccessful) {
    return (
      <div className="border border-green-200 bg-green-50 rounded p-8 text-center">
        <p className="font-display text-xl mb-2">{t('successTitle')}</p>
        <p className="text-sm text-mirai-gray-dark">{t('successMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-sans text-xs tracking-wide uppercase text-mirai-gray mb-2">{t('nameLabel')} *</label>
          <input
            {...register('name', { required: true })}
            className="w-full border rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-mirai-red transition-colors"
            style={{ borderWidth: '0.5px', borderColor: errors.name ? '#B22234' : '#E8E9EC' }}
          />
          {errors.name && <p className="text-xs text-mirai-red mt-1">{t('required')}</p>}
        </div>
        <div>
          <label className="block font-sans text-xs tracking-wide uppercase text-mirai-gray mb-2">{t('emailLabel')} *</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            type="email"
            className="w-full border rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-mirai-red transition-colors"
            style={{ borderWidth: '0.5px', borderColor: errors.email ? '#B22234' : '#E8E9EC' }}
          />
          {errors.email && <p className="text-xs text-mirai-red mt-1">{t('required')}</p>}
        </div>
      </div>
      <div>
        <label className="block font-sans text-xs tracking-wide uppercase text-mirai-gray mb-2">{t('companyLabel')}</label>
        <input
          {...register('company')}
          className="w-full border rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-mirai-red transition-colors"
          style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}
        />
      </div>
      <div>
        <label className="block font-sans text-xs tracking-wide uppercase text-mirai-gray mb-2">{t('typeLabel')}</label>
        <select
          {...register('type', { required: true })}
          className="w-full border rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-mirai-red transition-colors bg-white"
          style={{ borderWidth: '0.5px', borderColor: '#E8E9EC' }}
        >
          <option value="">{t('typeSelect')}</option>
          <option value="chinese-org">{t('typeChineseOrg')}</option>
          <option value="chinese-professional">{t('typeChineseProfessional')}</option>
          <option value="european-firm">{t('typeEuropeanFirm')}</option>
          <option value="other">{t('typeOther')}</option>
        </select>
      </div>
      <div>
        <label className="block font-sans text-xs tracking-wide uppercase text-mirai-gray mb-2">{t('messageLabel')} *</label>
        <textarea
          {...register('message', { required: true })}
          rows={5}
          className="w-full border rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-mirai-red transition-colors resize-none"
          style={{ borderWidth: '0.5px', borderColor: errors.message ? '#B22234' : '#E8E9EC' }}
        />
        {errors.message && <p className="text-xs text-mirai-red mt-1">{t('required')}</p>}
      </div>
      <div className="flex items-start gap-3">
        <input
          {...register('consent', { required: true })}
          type="checkbox"
          id="consent"
          className="mt-1 accent-mirai-red"
        />
        <label htmlFor="consent" className="text-xs text-mirai-gray-dark leading-relaxed font-sans">
          {t('consentText')}
        </label>
      </div>
      {errors.consent && <p className="text-xs text-mirai-red">{t('consentRequired')}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t('sending') : t('submit')}
      </button>
    </form>
  );
}
