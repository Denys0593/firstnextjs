import { Metadata } from "next"
import Button from "../../../buttons/button"

export const metadata: Metadata = {
    title: 'About / Contacts / Next App'
  }

export default function Contacts() {
    return (
        <div style={{marginTop: '20px'}}>
            <h1>Contacts page</h1>
            <Button/>
        </div>
    )
}
