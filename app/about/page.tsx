import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About / Next App'
  }

export default function About () {
    return (
        <h3 style={{marginTop: '20px'}}>Select subitem</h3>
    )
}