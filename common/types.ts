export type DataType = ShowElementType[]
export type RootObjectChildShowSchedule = {
  time: string
  days: string[]
}
export type RootObjectChildShowRating = {
  average: number
}
export type RootObjectChildShowNetworkCountry = {
  name: string
  code: string
  timezone: string
}
export type RootObjectChildShowNetwork = {
  id: number
  name: string
  country: RootObjectChildShowNetworkCountry
  officialSite: string
}
export type RootObjectChildShowExternals = {
  tvrage: number
  thetvdb: number
  imdb: string
}
export type ImageType = {
  medium: string
  original: string
}
export type RootObjectChildShow_linksSelf = {
  href: string
}
export type RootObjectChildShow_linksPreviousepisode = {
  href: string
}
export type RootObjectChildShow_links = {
  self: RootObjectChildShow_linksSelf
  previousepisode: RootObjectChildShow_linksPreviousepisode
}
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
  schedule: RootObjectChildShowSchedule
  rating: RootObjectChildShowRating
  weight: number
  network: RootObjectChildShowNetwork
  webChannel?: any
  dvdCountry?: any
  externals: RootObjectChildShowExternals
  image: ImageType
  summary: string
  updated: number
  _links: RootObjectChildShow_links
}
export type ShowElementType = {
  score: number
  show: ShowType
}
