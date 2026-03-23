interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ label, title, subtitle, centered = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-4">{label}</p>
      )}
      <h2 className="font-display text-section text-mirai-black mb-4">{title}</h2>
      {subtitle && (
        <p className="text-body text-mirai-gray-dark leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
