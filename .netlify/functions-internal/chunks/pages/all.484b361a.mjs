/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.070edda8.mjs';
/* empty css                           */
const $$Astro$a = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead($$result)}<div class="navbar border-b-2">
  <div class="flex-1">
    <img class="w-12 sm:w-16 mx-2 rounded-full" src="/at-logo-md.png">
    <a class="p-2 normal-case text-lg sm:text-xl font-semibold" href="/">Astor Technologies</a>
  </div>
  <div class="flex-none">
    <!-- <button class="btn btn-square btn-ghost sm:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-5 h-5 stroke-current"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        ></path></svg
      >
    </button> -->

    <div class="dropdown dropdown-end sm:hidden">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="w-10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-1 p-2 shadow-2xl bg-base-100 rounded-box w-52">
        <li><a href="/services">Our Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <ul class="menu menu-horizontal px-1 hidden sm:inline-flex">
      <li><a href="/services">Our Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</div>`;
}, "/Users/jsheets/dev/astor-tech-website/src/components/Navbar.astro");

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body class="h-screen flex flex-col">
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    <main class="flex flex-grow">
      ${renderSlot($$result, $$slots["default"])}
    </main>
  </body></html>`;
}, "/Users/jsheets/dev/astor-tech-website/src/layouts/Layout.astro");

const $$Astro$8 = createAstro();
const $$ScrollingWord = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ScrollingWord;
  const { words } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="h-10 sm:h-14 overflow-hidden inline-block text-3xl sm:text-5xl font-bold sm:px-2">
  <ul class="animate-scroll-up p-0 m-1 text-primary">
    ${words.map((word) => renderTemplate`<li class="flex align-bottom h-10 sm:h-14 list-none">${word}</li>`)}
    <li class="flex align-bottom h-10 sm:h-14 list-none">${words[0]}</li>
  </ul>
</div>`;
}, "/Users/jsheets/dev/astor-tech-website/src/components/ScrollingWord.astro");

const $$Astro$7 = createAstro();
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hero lg:px-32">
  <div class="hero-content flex-col lg:flex-row max-w-lg">
    <img src="/headshot.jpg" class="w-48 sm:w-64 rounded-full shadow-2xl">
    <div class="p-4">
      <div class="sm:flex sm:flex-row">
        <div class="flex flex-grow-0 h-10 sm:h-14 sm:items-center sm:whitespace-nowrap">
          <h1 class="text-3xl sm:text-5xl font-bold">Your trusted</h1>
        </div>
        ${renderComponent($$result, "ScrollingWord", $$ScrollingWord, { "words": ["software", "technology", "development", "solutions"] })}
        <div class="flex flex-grow h-10 sm:h-14 sm:items-center sm:whitespace-nowrap">
          <h1 class="text-3xl sm:text-5xl font-bold">partner</h1>
        </div>
      </div>
      <p class="pt-6 text-lg">
        <strong>Astor Technologies</strong> operates with a single purpose - to help our clients achieve
        their goals with cutting edge technology and software solutions.
      </p>
      <p class="py-6 text-lg">Become our partner, and let's build something amazing together!</p>
      <a href="/services" class="btn btn-ghost btn-outline btn-block sm:btn-md sm:btn-wide mb-4">Our services</a>
      <a href="/contact" class="btn btn-primary btn-block sm:btn-md sm:btn-wide">Contact us</a>
    </div>
  </div>
</div>`;
}, "/Users/jsheets/dev/astor-tech-website/src/components/Welcome.astro");

const $$Astro$6 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astor Technologies" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Welcome", $$Welcome, {})}` })}`;
}, "/Users/jsheets/dev/astor-tech-website/src/pages/index.astro");

const $$file$2 = "/Users/jsheets/dev/astor-tech-website/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$ServiceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, message } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="card w-72 max-w-xs bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <!-- <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" /> -->

    ${renderSlot($$result, $$slots["icon"])}
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${title}</h2>
    <p>${message}</p>
  </div>
</div>`;
}, "/Users/jsheets/dev/astor-tech-website/src/components/ServiceCard.astro");

const $$Astro$4 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astor Technologies" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="flex flex-col flex-grow items-center p-6">
    <h1 class="text-4xl font-bold py-4">Our Services</h1>
    <div class="pb-4 text-center w-auto max-w-lg md:max-w-3xl">
      We offer a wide range of services, always tailored to meet the needs of our unique clients.
      Just let us know what you need and we will work with you to find the best solution.
    </div>
    <a href="/contact" class="btn btn-primary btn-wide mb-4">Contact us</a>

    <div class="flex gap-8 flex-col md:flex-row flex-wrap justify-center">
      ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mobile Apps", "message": "Whether it's for the app store or internal business use, we can help you design and build it, from the ground up." }, { "icon": ($$result3) => renderTemplate`<img src="/app.svg" alt="Apps" class="max-w-xs">` })}
      ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Websites", "message": "Every business needs a web presence. We can help you build a website that will help you grow your business." }, { "icon": ($$result3) => renderTemplate`<img src="/web.svg" alt="Web" class="max-w-xs">` })}
      ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Consulting", "message": "Let us come alongside you and help you design and implement a solution, at any stage of the process" }, { "icon": ($$result3) => renderTemplate`<img src="/idea.svg" alt="Consult" class="max-w-xs">` })}
    </div>
  </div>` })}`;
}, "/Users/jsheets/dev/astor-tech-website/src/pages/services.astro");

const $$file$1 = "/Users/jsheets/dev/astor-tech-website/src/pages/services.astro";
const $$url$1 = "/services";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$FormInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FormInput;
  const { label, type = "text", name, placeholder, autofocus = false, maxlength } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="m-auto form-control w-full max-w-md my-2">
  <label class="label">
    <span class="label-text">${label}</span>
    <!-- {optional && <span class="label-text-alt">(Optional)</span>} -->
  </label>
  <input${addAttribute(autofocus, "autofocus")}${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(maxlength, "maxlength")} class="input input-bordered w-full max-w-md">
  <!-- <label class="label">
    {error && <span class={\`label-text-alt \${errorCls}\`}>{error}</span>}
  </label> -->
</div>`;
}, "/Users/jsheets/dev/astor-tech-website/src/components/FormInput.astro");

const $$Astro$2 = createAstro();
const $$FormTextarea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormTextarea;
  const { label, name, placeholder } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="m-auto form-control w-full max-w-md">
  <label class="label">
    <span class="label-text">${label}</span>
    <!-- {optional && <span class="label-text-alt">(Optional)</span>} -->
  </label>
  <textarea${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")} wrap="soft" class="textarea textarea-bordered w-full max-w-md"></textarea>
  <!-- <label class="label">
    {error && <span class={\`label-text-alt \${errorCls}\`}>{error}</span>}
  </label> -->
</div>`;
}, "/Users/jsheets/dev/astor-tech-website/src/components/FormTextarea.astro");

const $$Astro$1 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead($$result)}<form class="m-auto max-w-lg w-full" netlify data-netlify="true" netlify-honeypot="bot-field" name="contact" method="POST">
  <input type="hidden" name="subject" value="New contact inquiry from www.astortech.io">
  <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field">
    </label>
  </p>
  ${renderComponent($$result, "FormInput", $$FormInput, { "autofocus": true, "name": "name", "label": "Name", "placeholder": "Bruce Wayne" })}
  ${renderComponent($$result, "FormInput", $$FormInput, { "name": "email", "type": "email", "label": "Email", "placeholder": "h8bats@wayne.org" })}
  ${renderComponent($$result, "FormInput", $$FormInput, { "name": "phone", "type": "tel", "maxlength": "14", "label": "Phone", "placeholder": "(123) 456-7890" })}
  ${renderComponent($$result, "FormTextarea", $$FormTextarea, { "name": "message", "label": "Message", "placeholder": "Message" })}
  <button class="btn bg-primary btn-block my-6" type="submit"> Submit</button>
</form>`;
}, "/Users/jsheets/dev/astor-tech-website/src/components/ContactForm.astro");

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astor Technologies" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="hero">
    <div class="hero-content flex-col lg:flex-row">
      <div class="text-center lg:text-left max-w-lg lg:max-w-3xl">
        <h1 class="text-4xl font-bold">Contact us</h1>
        <p class="py-6">
          We'd love to hear about your project and how we can help, or maybe you just have a
          question about some of the services we provide.
        </p>
        <p>Either way, we'd love to hear from you!</p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div class="card-body">
          ${renderComponent($$result2, "ContactForm", $$ContactForm, {})}
        </div>
      </div>
    </div>
  </div>` })}`;
}, "/Users/jsheets/dev/astor-tech-website/src/pages/contact.astro");

const $$file = "/Users/jsheets/dev/astor-tech-website/src/pages/contact.astro";
const $$url = "/contact";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
