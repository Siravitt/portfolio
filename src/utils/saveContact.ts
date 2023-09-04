type Contact = {
    name: string,
    phone: string,
    email: string
}

export default function saveContact(): void {
    const CONTACT: Contact = {
        name: "Siravit Tanratvijit",
        phone: "084-450-6653",
        email: "siravitt.tan@gmail.com"
    }
    const vcard: string = "BEGIN:VCARD\nVERSION:4.0\nFN:" + CONTACT.name + "\nTEL;TYPE=work,voice:" + CONTACT.phone + "\nEMAIL:" + CONTACT.email + "\nEND:VCARD";
    let blob: Blob = new Blob([vcard], { type: "text/vcard"})
    const url:string = URL.createObjectURL(blob);

    const newLink: HTMLAnchorElement = document.createElement("a")
    newLink.download = CONTACT.name + ".vcf"
    newLink.textContent = CONTACT.name
    newLink.href = url
    newLink.click()
}