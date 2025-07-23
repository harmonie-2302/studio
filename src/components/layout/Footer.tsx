// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Harmy's Atelier. A votre service toujours{"\u{1F60A}"}
        </p>
        <p className="text-xs mt-1">
          Conçu avec passion et fil.
        </p>
      </div>
    </footer>
  );
}
