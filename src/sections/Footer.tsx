const Footer = () => (
  <footer className="border-t border-border/60 py-10 mt-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} AutoFinance. Todos os direitos reservados.</p>
      <nav className="flex items-center gap-6">
        <a href="#privacidade" className="story-link">Privacidade</a>
        <a href="#termos" className="story-link">Termos</a>
        <a href="#contato" className="story-link">Contato</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
