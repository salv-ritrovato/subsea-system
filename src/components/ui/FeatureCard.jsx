/**
 * Reusable feature card — image, title, and supporting copy.
 */
export default function FeatureCard({ image, imageAlt, title, description }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#060c12]/80 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 py-7 md:px-8 md:py-8">
        <h3 className="font-serif text-xl font-light text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/65">{description}</p>
      </div>
    </article>
  )
}
