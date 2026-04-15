import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "../components/Button";
import { Theme } from "../components/Theme";
import { useState } from "react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
    {href: "#testimonials", label: "Testimonials"},
    {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="glass rounded-full px-2 py-1 items-center flex gap-1 text-xl font-bold tracking-tight hover:text-primary">
                Charly<span className="gradient-text">.codes</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}</a>
                    ))}
                </div>
            </div>
            {/* CTA Button*/}
            <div className="hidden md:block">
                <Button size="sm">
                    Contact Me
                </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" 
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size= {24}/> :<Menu size={24} />}
            </button>
            
            {/*Theme button */}
            <div>
                <Theme size= "sm">
                    <Sun size={20}/>
                </Theme>
            </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                            {link.label}</a>
                ))}
                <Button>
                    Contact Me
                </Button>
            </div>
        </div>)}
    </header>
    );
};