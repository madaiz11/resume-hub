export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} ResumeHub. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
