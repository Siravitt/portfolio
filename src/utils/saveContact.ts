export default function saveContact() {
    const CONTACT = {
        name: "Siravit Tanratvijit",
        phone: "084-450-6653",
        email: "siravitt.tan@gmail.com"
    }
    const vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + CONTACT.name + "\nTEL;TYPE=work,voice:" + CONTACT.phone + "\nEMAIL:" + CONTACT.email + "\nEND:VCARD";
    let blob = new Blob([vcard], { type: "text/vcard"})
    const url = URL.createObjectURL(blob);

    const newLink = document.createElement("a")
    newLink.download = CONTACT.name + ".vcf"
    newLink.textContent = CONTACT.name
    newLink.href = url

    return newLink.click()
}