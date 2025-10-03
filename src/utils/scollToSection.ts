export default function scrollToSection(sectionId:string) {
    const section = document.getElementById(sectionId);
    if (section) {
        if(sectionId === 'hero'){
            window.scrollTo({top: 0, behavior: 'smooth'});
            return;
        }
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'})
    }
}