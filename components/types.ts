export type ShowType = {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: string
  officialSite: string
  schedule: {
    time: string
    days: string[]
  }
  rating: {
    average: number
  }
  weight: number
  network: {
    id: number
    name: string
    country: {
      name: string
      code: string
      timezone: string
    }
    officialSite: string
  }
  webChannel?: any
  dvdCountry?: any
  externals: {
    tvrage: number
    thetvdb: number
    imdb: string
  }
  image: {
    medium: string
    original: string
  }
  summary: string
  updated: number
  _links: {
    self: {
      href: string
    }
    previousepisode: {
      href: string
    }
  }
}

export type ShowResponseType = {
  score: number
  show: ShowType
}

export type EpisodesResponseType = EpisodeType[]
export type RootObjectChildRating = {
  average: number
}
export type RootObjectChildImage = {
  medium: string
  original: string
}
export type RootObjectChild_linksSelf = {
  href: string
}
export type RootObjectChild_links = {
  self: RootObjectChild_linksSelf
}
export type EpisodeType = {
  id: number
  url: string
  name: string
  season: number
  number: number
  type: string
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  rating: RootObjectChildRating
  image: RootObjectChildImage
  summary: string
  _links: RootObjectChild_links
}
