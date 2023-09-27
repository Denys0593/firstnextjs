import { Metadata } from "next"
import Button from "../../../buttons/button"

export const metadata: Metadata = {
    title: 'About / Team / Next App'
  }

export default function Team() {
    return (
        <div style={{marginTop: '20px'}}>
            <h1>Team page</h1>
            <Button/>
        </div>
    )
}
