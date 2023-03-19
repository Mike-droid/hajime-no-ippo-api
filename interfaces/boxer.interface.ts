export interface Boxer {
  id: Number | String,
  name: String,
  totalMatches: Number,
  wins: Number,
  winsByKO: Number,
  losses: Number,
  draws: Number,
  country: Country,
  weightClass: weightClass,
  image: String
}
