const Footer = () => {
  return (
    <footer className="mt-12 text-center text-zinc-600 dark:text-zinc-400 text-sm">
      <div className="inline-flex items-center">
        <span>&copy; {new Date().getFullYear()} Mike Jonas</span>
      </div>
    </footer>
  );
};

export default Footer;
