/**
 * Immersive exploration card — full-bleed image with overlaid copy.
 */
export default function ExplorationCard({
  image,
  imageAlt,
  title,
  description,
  index,
  featured = false,
  glow = false,
}) {
  return (
    <article
      className={[
        'exploration-card group h-full',
        featured ? 'exploration-card--featured' : '',
        glow ? 'exploration-card--glow' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img
        src={image}
        alt={imageAlt}
        className="exploration-card__image absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Depth vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#040810] via-[#040810]/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#040810]/30 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <span className="exploration-card__index font-sans text-[10px] font-medium uppercase text-white/40">
          {String(index).padStart(2, '0')}
        </span>

        <div className="mt-auto">
          <h3 className="font-serif text-xl font-light text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">{description}</p>
        </div>
      </div>
    </article>
  )
}
