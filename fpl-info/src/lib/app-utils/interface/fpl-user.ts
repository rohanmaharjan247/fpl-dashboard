import { User } from "@auth0/auth0-react"
import { EntryPickElement } from "../hook"

export interface FPLUser extends User {
  user_metadata: {
    entry_code: number
  }
}

export interface GroupedManagerTeam {
  [x: string]: {
    [x: string]: EntryPickElement[]
  }
}

export interface GroupedSubTeam {
  [x: string]: EntryPickElement[]
}
