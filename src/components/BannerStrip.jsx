import yakBanner from '../assets/images/hero/yak_banner.png'

export function BannerStrip() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-3 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
        <img
          src={yakBanner}
          alt="Yak Beraya banner"
          className="h-28 w-full object-cover object-left center sm:h-32 md:h-36"
          loading="eager"
        />
      </div>
    </div>
  )
}

