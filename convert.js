const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'index.html', route: 'page.tsx', dir: 'src/app', title: 'Smart IoT Solutions | Automation Experts', description: 'Delivering smarter, safer and more connected spaces through innovative IoT and automation solutions.' },
  { file: 'about.html', route: 'page.tsx', dir: 'src/app/about', title: 'About Us | Smart IoT Solutions', description: 'Learn about our mission to bring secure and reliable smart automation to your homes and businesses.' },
  { file: 'contact.html', route: 'page.tsx', dir: 'src/app/contact', title: 'Contact Us | Smart IoT Solutions', description: 'Get in touch for a free site visit and personalized automation solutions.' },
  { file: 'projects.html', route: 'page.tsx', dir: 'src/app/projects', title: 'Our Projects | Smart IoT Solutions', description: 'Explore our portfolio of smart home and commercial automation projects.' },
  { file: 'solutions.html', route: 'page.tsx', dir: 'src/app/solutions', title: 'Solutions | Smart IoT Solutions', description: 'Discover our comprehensive range of home automation, smart locks, and gate automation solutions.' },
];

function convertHtmlToTsx(html) {
  const navEnd = html.indexOf('</nav>');
  const footerStart = html.indexOf('<footer');
  let content = '';
  if (navEnd !== -1 && footerStart !== -1) {
    content = html.substring(navEnd + 6, footerStart);
  } else {
    const bodyStart = html.indexOf('<body');
    const bodyEnd = html.indexOf('</body>');
    content = html.substring(bodyStart !== -1 ? html.indexOf('>', bodyStart) + 1 : 0, bodyEnd !== -1 ? bodyEnd : html.length);
  }

  let tsx = content
    .replace(/class=/g, 'className=')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/style="([^"]*)"/g, (match, p1) => {
      const rules = p1.split(';').filter(Boolean);
      const reactStyles = rules.map(rule => {
        let [key, value] = rule.split(':');
        if(!key || !value) return '';
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        value = value.trim();
        return `${key}: "${value}"`;
      }).filter(Boolean).join(', ');
      return `style={{ ${reactStyles} }}`;
    });

  tsx = tsx
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="about\.html"/g, 'href="/about"')
    .replace(/href="contact\.html"/g, 'href="/contact"')
    .replace(/href="products\.html"/g, 'href="/products"')
    .replace(/href="projects\.html"/g, 'href="/projects"')
    .replace(/href="solutions\.html"/g, 'href="/solutions"');

  return tsx;
}

pages.forEach(({ file, route, dir, title, description }) => {
  if (!fs.existsSync(file)) return;
  const html = fs.readFileSync(file, 'utf-8');
  const tsxContent = convertHtmlToTsx(html);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const name = file.replace('.html', '');
  const compName = name.charAt(0).toUpperCase() + name.slice(1);

  const finalTsx = `import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
};

export default function ${compName}Page() {
  return (
    <>
${tsxContent}
    </>
  );
}
`;

  fs.writeFileSync(path.join(dir, route), finalTsx);
  console.log('Converted ' + file);
});
