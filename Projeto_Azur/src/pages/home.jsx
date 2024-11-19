import ClienteHome from "../components/ClienteHome/ClienteHome";
import Header from "../components/header/Header";
import SidebarNavbar from "../components/SidebarNavbar/SidebarNavbar";

export default function Home (){
    return(
        <>
        <SidebarNavbar/>
        <Header/>
        <ClienteHome/>
        </>
    )
}
