import * as React from "react";
import { footerStyle, copyright } from "./footer.module.css";

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · NADUVI · All rights reserved
      </div>
    </footer>
  )
}
