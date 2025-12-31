import React, { useState } from "react";

const Working = () => {
  const [openSection, setOpenSection] = useState(null);
  const [output, setOutput] = useState(null);

  const toggleSection = (name) => {
    setOpenSection(openSection === name ? null : name);
  };

  // ------------------------------------------
  // tagInfo: title, description, demo (HTML)
  // ------------------------------------------
  const tagInfo = {
    // ---------------- Document Structure ----------------
    "!DOCTYPE": {
      title: "<!DOCTYPE>",
      desc: "Declares the document type and version of HTML. Put at the top of HTML documents.",
      demo: "<!DOCTYPE html>"
    },
    html: {
      title: "<html>",
      desc: "Root element of an HTML document. All visible page content lives inside <html>.",
      demo: "<html><head><title>Title</title></head><body><p>Inside &lt;html&gt;</p></body></html>"
    },
    head: {
      title: "<head>",
      desc: "Container for metadata: title, meta tags, links to stylesheets and scripts.",
      demo: "<head><meta charset='utf-8'/><title>Example</title></head>"
    },
    title: {
      title: "<title>",
      desc: "Sets the title shown in the browser tab and used by search engines.",
      demo: "<title>My Page Title</title>"
    },
    body: {
      title: "<body>",
      desc: "Contains all visible content: headings, paragraphs, images, etc.",
      demo: "<body><h1>Welcome</h1><p>Visible content goes here.</p></body>"
    },

    // ---------------- Metadata ----------------
    meta: {
      title: "<meta>",
      desc: "Specifies metadata such as charset, description, viewport, keywords.",
      demo: "<meta name='description' content='Short page description' />"
    },
    link: {
      title: "<link>",
      desc: "Links external resources like stylesheets or icons.",
      demo: "<link rel='stylesheet' href='styles.css' />"
    },
    style: {
      title: "<style>",
      desc: "Contains internal CSS rules in the head or body.",
      demo: "<style>.demo{color:tomato}</style><p class='demo'>Styled text</p>"
    },
    base: {
      title: "<base>",
      desc: "Specifies a base URL for all relative URLs on a page.",
      demo: "<base href='https://example.com/subpath/' />"
    },

    // ---------------- Sectioning ----------------
    header: {
      title: "<header>",
      desc: "Introductory content for a page or section — often contains navigation.",
      demo: "<header><h1>Site Header</h1><nav><a href='#'>Home</a></nav></header>"
    },
    footer: {
      title: "<footer>",
      desc: "Footer content — copyright, links, or metadata about its section.",
      demo: "<footer>© 2025 Example — All rights reserved</footer>"
    },
    nav: {
      title: "<nav>",
      desc: "Defines a block of navigation links.",
      demo: "<nav><a href='#home'>Home</a> | <a href='#about'>About</a></nav>"
    },
    main: {
      title: "<main>",
      desc: "Main content area — should be unique for the document and not repeated.",
      demo: "<main><h2>Main Content</h2><p>Primary page content.</p></main>"
    },
    section: {
      title: "<section>",
      desc: "Generic sectioning element, usually with a heading.",
      demo: "<section><h3>Section</h3><p>Grouped content</p></section>"
    },
    article: {
      title: "<article>",
      desc: "Self-contained content such as a blog post, news article, or forum post.",
      demo: "<article><h3>Article Title</h3><p>Article body...</p></article>"
    },
    aside: {
      title: "<aside>",
      desc: "Content tangentially related to the main content (sidebar, advertisement, callout).",
      demo: "<aside><p>Related links & notes</p></aside>"
    },
    "h1-6": {
      title: "<h1>–<h6>",
      desc: "Heading elements from most important (<h1>) to least (<h6>).",
      demo: "<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>"
    },
    hgroup: {
      title: "<hgroup>",
      desc: "Groups a set of headings (title + subtitle). Less commonly used; semantic grouping.",
      demo: "<hgroup><h1>Page Title</h1><h2>Subtitle</h2></hgroup>"
    },

    // ---------------- Text Content ----------------
    p: {
      title: "<p>",
      desc: "Paragraph: block of text.",
      demo: "<p>This is a paragraph of text that demonstrates the &lt;p&gt; tag.</p>"
    },
    hr: {
      title: "<hr>",
      desc: "Horizontal rule: thematic break between content.",
      demo: "<p>Above</p><hr /><p>Below</p>"
    },
    pre: {
      title: "<pre>",
      desc: "Preformatted text: preserves whitespace and line breaks.",
      demo: "<pre>Line 1\n  Indented line\nLine 3</pre>"
    },
    blockquote: {
      title: "<blockquote>",
      desc: "A section quoted from another source; typically rendered indented.",
      demo: "<blockquote>“This is a blockquote example.”</blockquote>"
    },
    ol: {
      title: "<ol>",
      desc: "Ordered (numbered) list.",
      demo: "<ol><li>First</li><li>Second</li><li>Third</li></ol>"
    },
    ul: {
      title: "<ul>",
      desc: "Unordered (bulleted) list.",
      demo: "<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>"
    },
    li: {
      title: "<li>",
      desc: "List item used inside <ul>, <ol> or <menu>.",
      demo: "<ul><li>Single item</li></ul>"
    },
    dl: {
      title: "<dl>",
      desc: "Description list for name/value pairs (terms + definitions).",
      demo: "<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>"
    },
    dt: {
      title: "<dt>",
      desc: "Term in a description list.",
      demo: "<dl><dt>Term</dt><dd>Definition</dd></dl>"
    },
    dd: {
      title: "<dd>",
      desc: "Definition for a term in a description list.",
      demo: "<dl><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>"
    },
    figure: {
      title: "<figure>",
      desc: "Self-contained content such as an image with an optional caption.",
      demo: "<figure><img src='https://via.placeholder.com/120' alt='placeholder' /><figcaption>Example image</figcaption></figure>"
    },
    figcaption: {
      title: "<figcaption>",
      desc: "Caption for a <figure> element.",
      demo: "<figure><img src='https://via.placeholder.com/80' alt='img' /><figcaption>Caption text</figcaption></figure>"
    },
    div: {
      title: "<div>",
      desc: "Generic block-level container used for grouping/layout.",
      demo: "<div style='padding:8px;background:#2b2b2b;color:#fff'>A div block</div>"
    },

    // ---------------- Inline Text Semantics ----------------
    br: {
      title: "<br>",
      desc: "Line break element.",
      demo: "Line one<br/>Line two<br/>Line three"
    },
    strong: {
      title: "<strong>",
      desc: "Indicates strong importance (usually bold).",
      demo: "<strong>Important text</strong>"
    },
    i: {
      title: "<i>",
      desc: "Italic text for alternate voice or technical terms.",
      demo: "<i>Italic example</i>"
    },
    em: {
      title: "<em>",
      desc: "Emphasized text (also typically renders italic).",
      demo: "<em>Emphasized</em>"
    },
    u: {
      title: "<u>",
      desc: "Underline text (stylistic).",
      demo: "<u>Underlined</u>"
    },
    s: {
      title: "<s>",
      desc: "Strikethrough text indicating removal or inaccuracy.",
      demo: "<s>Struck-through text</s>"
    },
    mark: {
      title: "<mark>",
      desc: "Highlights text (usually yellow background).",
      demo: "<mark>Highlighted text</mark>"
    },
    small: {
      title: "<small>",
      desc: "Smaller print, usually for fine print or disclaimers.",
      demo: "<small>Small helper text</small>"
    },
    abbr: {
      title: "<abbr>",
      desc: "Represents an abbreviation; use title attribute for full text.",
      demo: "<abbr title='HyperText Markup Language'>HTML</abbr>"
    },
    cite: {
      title: "<cite>",
      desc: "Represents a reference to a creative work (book, paper, song).",
      demo: "<cite>The Odyssey</cite>"
    },
    q: {
      title: "<q>",
      desc: "Short inline quotation; browsers usually add quotation marks.",
      demo: "<q>Inline quote</q>"
    },
    span: {
      title: "<span>",
      desc: "Generic inline container, used for styling or grouping text inline.",
      demo: "<span style='color:orange;'>Colored span</span>"
    },
    sub: {
      title: "<sub>",
      desc: "Subscript text (below baseline).",
      demo: "H<sub>2</sub>O"
    },
    sup: {
      title: "<sup>",
      desc: "Superscript text (above baseline).",
      demo: "X<sup>2</sup>"
    },

    // ---------------- Media ----------------
    img: {
      title: "<img>",
      desc: "Embeds an image; requires src attribute.",
      demo: "<img src='https://via.placeholder.com/140' alt='placeholder' />"
    },
    video: {
      title: "<video>",
      desc: "Embeds video media; use <source> for multiple formats.",
      demo: "<video width='240' controls><source src='' type='video/mp4'/>Your browser does not support video.</video>"
    },
    audio: {
      title: "<audio>",
      desc: "Embeds audio media; use <source> elements for formats.",
      demo: "<audio controls><source src='' type='audio/mpeg'/>Your browser does not support audio.</audio>"
    },
    source: {
      title: "<source>",
      desc: "Specifies media source for <audio> or <video> (multiple sources supported).",
      demo: "<video width='200' controls><source src='' type='video/mp4'/>Fallback text</video>"
    },
    track: {
      title: "<track>",
      desc: "Used to add text tracks (subtitles/captions) to media elements.",
      demo: "<video width='200' controls><track kind='captions' src='' srclang='en' label='English' /></video>"
    },
    canvas: {
      title: "<canvas>",
      desc: "A drawable region for 2D/3D graphics via JavaScript.",
      demo: "<canvas width='200' height='80' id='canvasDemo' style='background:#111'></canvas>"
    },
    svg: {
      title: "<svg>",
      desc: "Container for SVG vector graphics.",
      demo: "<svg width='120' height='80'><circle cx='60' cy='40' r='30' fill='#fbbf24' /></svg>"
    },
    picture: {
      title: "<picture>",
      desc: "Allows responsive images using multiple sources and fallbacks.",
      demo: "<picture><img src='https://via.placeholder.com/140' alt='picture' /></picture>"
    },

    // ---------------- Forms & Input ----------------
    form: {
      title: "<form>",
      desc: "Wraps form controls. Use method and action attributes for submission.",
      demo: "<form><label>Name: <input placeholder='Your name' /></label></form>"
    },
    input: {
      title: "<input>",
      desc: "A variety of input controls (text, checkbox, radio, etc.).",
      demo: "<input type='text' placeholder='Type here' />"
    },
    textarea: {
      title: "<textarea>",
      desc: "Multi-line text input.",
      demo: "<textarea rows='3' cols='30'>Editable text</textarea>"
    },
    button: {
      title: "<button>",
      desc: "Clickable button used for forms or UI actions.",
      demo: "<button>Click me</button>"
    },
    select: {
      title: "<select>",
      desc: "Dropdown selection control.",
      demo: "<select><option>One</option><option>Two</option></select>"
    },
    option: {
      title: "<option>",
      desc: "An option inside a <select> element.",
      demo: "<select><option value='1'>Option 1</option></select>"
    },
    label: {
      title: "<label>",
      desc: "Label for a form control; improves accessibility.",
      demo: "<label for='nm'>Name: <input id='nm' /></label>"
    },
    fieldset: {
      title: "<fieldset>",
      desc: "Groups related form controls together.",
      demo: "<fieldset><legend>Group</legend><input /></fieldset>"
    },
    legend: {
      title: "<legend>",
      desc: "Caption for a <fieldset>.",
      demo: "<fieldset><legend>Title</legend><input /></fieldset>"
    },
    datalist: {
      title: "<datalist>",
      desc: "Provides predefined options for an <input> using list attribute.",
      demo: "<input list='browsers' /><datalist id='browsers'><option>Chrome</option></datalist>"
    },
    output: {
      title: "<output>",
      desc: "Represents the result of a calculation or user action.",
      demo: "<output name='result'>42</output>"
    },
    progress: {
      title: "<progress>",
      desc: "Displays progress of a task.",
      demo: "<progress value='30' max='100'>30%</progress>"
    },
    meter: {
      title: "<meter>",
      desc: "Represents a scalar measurement within a known range.",
      demo: "<meter value='0.6'>60%</meter>"
    },

    // ---------------- Interactive ----------------
    details: {
      title: "<details>",
      desc: "A disclosure widget the user can open/close.",
      demo: "<details><summary>More</summary><p>Hidden content shown when open.</p></details>"
    },
    summary: {
      title: "<summary>",
      desc: "Summary (label) for the <details> element.",
      demo: "<details><summary>Summary label</summary><p>Details content</p></details>"
    },
    dialog: {
      title: "<dialog>",
      desc: "Represents a dialog box or window. Use showModal() in JS to open.",
      demo: "<dialog open>Dialog content (native support varies)</dialog>"
    },

    // ---------------- Scripting ----------------
    script: {
      title: "<script>",
      desc: "Holds or references JavaScript code.",
      demo: "<script>console.log('Hello')</script>"
    },
    noscript: {
      title: "<noscript>",
      desc: "Content displayed when JavaScript is disabled.",
      demo: "<noscript>Please enable JavaScript to view this content.</noscript>"
    },

    // ---------------- Tables ----------------
    table: {
      title: "<table>",
      desc: "Tabular data container using rows and cells.",
      demo: "<table><thead><tr><th>Col</th></tr></thead><tbody><tr><td>Val</td></tr></tbody></table>"
    },
    thead: {
      title: "<thead>",
      desc: "Groups the header content in a table.",
      demo: "<table><thead><tr><th>Head</th></tr></thead></table>"
    },
    tbody: {
      title: "<tbody>",
      desc: "Groups the body rows in a table.",
      demo: "<table><tbody><tr><td>Body</td></tr></tbody></table>"
    },
    tfoot: {
      title: "<tfoot>",
      desc: "Groups footer rows in a table (e.g., totals).",
      demo: "<table><tfoot><tr><td>Footer</td></tr></tfoot></table>"
    },
    tr: {
      title: "<tr>",
      desc: "Table row containing cells (<td> or <th>).",
      demo: "<table><tr><td>Row</td></tr></table>"
    },
    th: {
      title: "<th>",
      desc: "Header cell in a table, usually bold and centered.",
      demo: "<table><tr><th>Header</th></tr></table>"
    },
    td: {
      title: "<td>",
      desc: "Standard table cell for data.",
      demo: "<table><tr><td>Cell</td></tr></table>"
    },
    caption: {
      title: "<caption>",
      desc: "Table caption displayed above or below the table.",
      demo: "<table><caption>Table caption</caption></table>"
    },
    colgroup: {
      title: "<colgroup>",
      desc: "Groups columns to apply shared attributes or styles.",
      demo: "<table><colgroup><col span='1' /></colgroup></table>"
    },
    col: {
      title: "<col>",
      desc: "Defines column properties for a table.",
      demo: "<table><colgroup><col style='background:#eee' /></colgroup></table>"
    },

    // ---------------- Edit / Modification ----------------
    ins: {
      title: "<ins>",
      desc: "Represents inserted text (often used with time or cite attributes).",
      demo: "<p><ins>Inserted text</ins></p>"
    },
    del: {
      title: "<del>",
      desc: "Represents deleted text (often shows strike-through).",
      demo: "<p><del>Deleted text</del></p>"
    },

    // ---------------- Programmatic ----------------
    template: {
      title: "<template>",
      desc: "Holds markup that is not rendered until cloned by script.",
      demo: "<template><p>Template content</p></template>"
    },
    slot: {
      title: "<slot>",
      desc: "Used in Web Components to mark where children should be inserted.",
      demo: "<slot name='content'></slot>"
    },

    // ---------------- SVG (root and shapes) ----------------
    svg_root: {
      title: "<svg>",
      desc: "SVG root for vector graphics.",
      demo: "<svg width='120' height='80'><rect width='100%' height='100%' fill='#e2e8f0'/></svg>"
    },
    circle: {
      title: "<circle>",
      desc: "SVG circle shape element (used inside <svg>).",
      demo: "<svg width='80' height='80'><circle cx='40' cy='40' r='30' fill='#60a5fa'/></svg>"
    },
    rect: {
      title: "<rect>",
      desc: "SVG rectangle shape.",
      demo: "<svg width='80' height='40'><rect width='80' height='40' fill='#f472b6' /></svg>"
    },
    line: {
      title: "<line>",
      desc: "SVG line element connecting two points.",
      demo: "<svg width='80' height='40'><line x1='0' y1='20' x2='80' y2='20' stroke='black' /></svg>"
    },
    polygon: {
      title: "<polygon>",
      desc: "SVG polygon defined by points.",
      demo: "<svg width='100' height='80'><polygon points='50,5 90,80 10,80' fill='#fbbf24' /></svg>"
    },
    polyline: {
      title: "<polyline>",
      desc: "SVG polyline element (open shape).",
      demo: "<svg width='100' height='50'><polyline points='0,40 40,0 80,40' fill='none' stroke='black'/></svg>"
    },
    ellipse: {
      title: "<ellipse>",
      desc: "SVG ellipse shape.",
      demo: "<svg width='120' height='80'><ellipse cx='60' cy='40' rx='40' ry='20' fill='#34d399' /></svg>"
    },
    path: {
      title: "<path>",
      desc: "SVG path element for complex shapes.",
      demo: "<svg width='100' height='60'><path d='M10 10 H 90 V 50 H 10 Z' fill='#a78bfa'/></svg>"
    },
    text: {
      title: "<text>",
      desc: "SVG text element.",
      demo: "<svg width='200' height='40'><text x='0' y='20' font-size='16'>SVG Text</text></svg>"
    },
    g: {
      title: "<g>",
      desc: "SVG grouping element used to group shapes.",
      demo: "<svg width='100' height='40'><g fill='#fb7185'><rect x='0' y='0' width='30' height='30'/><rect x='35' y='0' width='30' height='30'/></g></svg>"
    },

    // ---------------- MathML ----------------
    math: {
      title: "<math>",
      desc: "MathML root element for mathematical markup.",
      demo: "<math><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>"
    },
    mi: {
      title: "<mi>",
      desc: "MathML identifier (like a variable name).",
      demo: "<math><mi>x</mi></math>"
    },
    mn: {
      title: "<mn>",
      desc: "MathML number token.",
      demo: "<math><mn>42</mn></math>"
    },
    mo: {
      title: "<mo>",
      desc: "MathML operator (e.g., +, −, =).",
      demo: "<math><mo>+</mo></math>"
    },
    mrow: {
      title: "<mrow>",
      desc: "Groups subexpressions in MathML.",
      demo: "<math><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></math>"
    },
    msqrt: {
      title: "<msqrt>",
      desc: "MathML square root element.",
      demo: "<math><msqrt><mn>16</mn></msqrt></math>"
    },
    mfrac: {
      title: "<mfrac>",
      desc: "MathML fraction (numerator/denominator).",
      demo: "<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>"
    }
  };

  // helper: find key by simplified tag name when keys differ (e.g., svg_root)
  const normalizeKey = (tag) => {
    if (tag === "svg") return "svg_root";
    return tag;
  };

  const runDemo = (tag) => {
    const key = normalizeKey(tag);
    const info = tagInfo[key];
    if (!info) {
      setOutput({
        title: "Unknown tag",
        desc: "No info available for this tag yet.",
        demo: `<div>No demo available for ${tag}</div>`
      });
      return;
    }
    setOutput(info);
  };

  const clearOutput = () => setOutput(null);

  return (
    <>
      <div className="navbar">
        <div className="text-left">HTML BOARD</div>
      </div>

      <div className="wrapper">
        {/* LEFT SIDE */}
        <div className="sidebar-left">

          {/* 1. Document Structure */}
          <div className="section">
            <h2 onClick={() => toggleSection("doc")}>Document Structure Tags</h2>
            {openSection === "doc" && (
              <div className="content-box">
                <div className="method"><span>&lt;!DOCTYPE&gt;</span><button onClick={() => runDemo("!DOCTYPE")}>Run</button></div>
                <div className="method"><span>&lt;html&gt;</span><button onClick={() => runDemo("html")}>Run</button></div>
                <div className="method"><span>&lt;head&gt;</span><button onClick={() => runDemo("head")}>Run</button></div>
                <div className="method"><span>&lt;title&gt;</span><button onClick={() => runDemo("title")}>Run</button></div>
                <div className="method"><span>&lt;body&gt;</span><button onClick={() => runDemo("body")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 2. Metadata Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("meta")}>Metadata Tags</h2>
            {openSection === "meta" && (
              <div className="content-box">
                <div className="method"><span>&lt;meta&gt;</span><button onClick={() => runDemo("meta")}>Run</button></div>
                <div className="method"><span>&lt;link&gt;</span><button onClick={() => runDemo("link")}>Run</button></div>
                <div className="method"><span>&lt;style&gt;</span><button onClick={() => runDemo("style")}>Run</button></div>
                <div className="method"><span>&lt;base&gt;</span><button onClick={() => runDemo("base")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 3. Content Sectioning Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("sectioning")}>Content Sectioning Tags</h2>
            {openSection === "sectioning" && (
              <div className="content-box">
                <div className="method"><span>&lt;header&gt;</span><button onClick={() => runDemo("header")}>Run</button></div>
                <div className="method"><span>&lt;footer&gt;</span><button onClick={() => runDemo("footer")}>Run</button></div>
                <div className="method"><span>&lt;nav&gt;</span><button onClick={() => runDemo("nav")}>Run</button></div>
                <div className="method"><span>&lt;main&gt;</span><button onClick={() => runDemo("main")}>Run</button></div>
                <div className="method"><span>&lt;section&gt;</span><button onClick={() => runDemo("section")}>Run</button></div>
                <div className="method"><span>&lt;article&gt;</span><button onClick={() => runDemo("article")}>Run</button></div>
                <div className="method"><span>&lt;aside&gt;</span><button onClick={() => runDemo("aside")}>Run</button></div>
                <div className="method"><span>&lt;h1&gt;–&lt;h6&gt;</span><button onClick={() => runDemo("h1-6")}>Run</button></div>
                <div className="method"><span>&lt;hgroup&gt;</span><button onClick={() => runDemo("hgroup")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 4. Text Content Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("text")}>Text Content Tags</h2>
            {openSection === "text" && (
              <div className="content-box">
                <div className="method"><span>&lt;p&gt;</span><button onClick={() => runDemo("p")}>Run</button></div>
                <div className="method"><span>&lt;hr&gt;</span><button onClick={() => runDemo("hr")}>Run</button></div>
                <div className="method"><span>&lt;pre&gt;</span><button onClick={() => runDemo("pre")}>Run</button></div>
                <div className="method"><span>&lt;blockquote&gt;</span><button onClick={() => runDemo("blockquote")}>Run</button></div>
                <div className="method"><span>&lt;ol&gt;</span><button onClick={() => runDemo("ol")}>Run</button></div>
                <div className="method"><span>&lt;ul&gt;</span><button onClick={() => runDemo("ul")}>Run</button></div>
                <div className="method"><span>&lt;li&gt;</span><button onClick={() => runDemo("li")}>Run</button></div>
                <div className="method"><span>&lt;dl&gt;</span><button onClick={() => runDemo("dl")}>Run</button></div>
                <div className="method"><span>&lt;dt&gt;</span><button onClick={() => runDemo("dt")}>Run</button></div>
                <div className="method"><span>&lt;dd&gt;</span><button onClick={() => runDemo("dd")}>Run</button></div>
                <div className="method"><span>&lt;figure&gt;</span><button onClick={() => runDemo("figure")}>Run</button></div>
                <div className="method"><span>&lt;figcaption&gt;</span><button onClick={() => runDemo("figcaption")}>Run</button></div>
                <div className="method"><span>&lt;div&gt;</span><button onClick={() => runDemo("div")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 5. Inline Text Semantics */}
          <div className="section">
            <h2 onClick={() => toggleSection("inline")}>Inline Text Semantics</h2>
            {openSection === "inline" && (
              <div className="content-box">
                <div className="method"><span>&lt;br&gt;</span><button onClick={() => runDemo("br")}>Run</button></div>
                <div className="method"><span>&lt;strong&gt;</span><button onClick={() => runDemo("strong")}>Run</button></div>
                <div className="method"><span>&lt;i&gt;</span><button onClick={() => runDemo("i")}>Run</button></div>
                <div className="method"><span>&lt;em&gt;</span><button onClick={() => runDemo("em")}>Run</button></div>
                <div className="method"><span>&lt;u&gt;</span><button onClick={() => runDemo("u")}>Run</button></div>
                <div className="method"><span>&lt;s&gt;</span><button onClick={() => runDemo("s")}>Run</button></div>
                <div className="method"><span>&lt;mark&gt;</span><button onClick={() => runDemo("mark")}>Run</button></div>
                <div className="method"><span>&lt;small&gt;</span><button onClick={() => runDemo("small")}>Run</button></div>
                <div className="method"><span>&lt;abbr&gt;</span><button onClick={() => runDemo("abbr")}>Run</button></div>
                <div className="method"><span>&lt;cite&gt;</span><button onClick={() => runDemo("cite")}>Run</button></div>
                <div className="method"><span>&lt;q&gt;</span><button onClick={() => runDemo("q")}>Run</button></div>
                <div className="method"><span>&lt;span&gt;</span><button onClick={() => runDemo("span")}>Run</button></div>
                <div className="method"><span>&lt;sub&gt;</span><button onClick={() => runDemo("sub")}>Run</button></div>
                <div className="method"><span>&lt;sup&gt;</span><button onClick={() => runDemo("sup")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 6. Media Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("media")}>Image & Multimedia Tags</h2>
            {openSection === "media" && (
              <div className="content-box">
                <div className="method"><span>&lt;img&gt;</span><button onClick={() => runDemo("img")}>Run</button></div>
                <div className="method"><span>&lt;video&gt;</span><button onClick={() => runDemo("video")}>Run</button></div>
                <div className="method"><span>&lt;audio&gt;</span><button onClick={() => runDemo("audio")}>Run</button></div>
                <div className="method"><span>&lt;source&gt;</span><button onClick={() => runDemo("source")}>Run</button></div>
                <div className="method"><span>&lt;track&gt;</span><button onClick={() => runDemo("track")}>Run</button></div>
                <div className="method"><span>&lt;canvas&gt;</span><button onClick={() => runDemo("canvas")}>Run</button></div>
                <div className="method"><span>&lt;svg&gt;</span><button onClick={() => runDemo("svg")}>Run</button></div>
                <div className="method"><span>&lt;picture&gt;</span><button onClick={() => runDemo("picture")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 7. Forms & Input Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("forms")}>Forms & Input Tags</h2>
            {openSection === "forms" && (
              <div className="content-box">
                <div className="method"><span>&lt;form&gt;</span><button onClick={() => runDemo("form")}>Run</button></div>
                <div className="method"><span>&lt;input&gt;</span><button onClick={() => runDemo("input")}>Run</button></div>
                <div className="method"><span>&lt;textarea&gt;</span><button onClick={() => runDemo("textarea")}>Run</button></div>
                <div className="method"><span>&lt;button&gt;</span><button onClick={() => runDemo("button")}>Run</button></div>
                <div className="method"><span>&lt;select&gt;</span><button onClick={() => runDemo("select")}>Run</button></div>
                <div className="method"><span>&lt;option&gt;</span><button onClick={() => runDemo("option")}>Run</button></div>
                <div className="method"><span>&lt;label&gt;</span><button onClick={() => runDemo("label")}>Run</button></div>
                <div className="method"><span>&lt;fieldset&gt;</span><button onClick={() => runDemo("fieldset")}>Run</button></div>
                <div className="method"><span>&lt;legend&gt;</span><button onClick={() => runDemo("legend")}>Run</button></div>
                <div className="method"><span>&lt;datalist&gt;</span><button onClick={() => runDemo("datalist")}>Run</button></div>
                <div className="method"><span>&lt;output&gt;</span><button onClick={() => runDemo("output")}>Run</button></div>
                <div className="method"><span>&lt;progress&gt;</span><button onClick={() => runDemo("progress")}>Run</button></div>
                <div className="method"><span>&lt;meter&gt;</span><button onClick={() => runDemo("meter")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 8. Interactive Elements */}
          <div className="section">
            <h2 onClick={() => toggleSection("interactive")}>Interactive Elements</h2>
            {openSection === "interactive" && (
              <div className="content-box">
                <div className="method"><span>&lt;details&gt;</span><button onClick={() => runDemo("details")}>Run</button></div>
                <div className="method"><span>&lt;summary&gt;</span><button onClick={() => runDemo("summary")}>Run</button></div>
                <div className="method"><span>&lt;dialog&gt;</span><button onClick={() => runDemo("dialog")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 9. Scripting Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("script")}>Scripting Tags</h2>
            {openSection === "script" && (
              <div className="content-box">
                <div className="method"><span>&lt;script&gt;</span><button onClick={() => runDemo("script")}>Run</button></div>
                <div className="method"><span>&lt;noscript&gt;</span><button onClick={() => runDemo("noscript")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 10. Table Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("table")}>Table Tags</h2>
            {openSection === "table" && (
              <div className="content-box">
                <div className="method"><span>&lt;table&gt;</span><button onClick={() => runDemo("table")}>Run</button></div>
                <div className="method"><span>&lt;thead&gt;</span><button onClick={() => runDemo("thead")}>Run</button></div>
                <div className="method"><span>&lt;tbody&gt;</span><button onClick={() => runDemo("tbody")}>Run</button></div>
                <div className="method"><span>&lt;tfoot&gt;</span><button onClick={() => runDemo("tfoot")}>Run</button></div>
                <div className="method"><span>&lt;tr&gt;</span><button onClick={() => runDemo("tr")}>Run</button></div>
                <div className="method"><span>&lt;th&gt;</span><button onClick={() => runDemo("th")}>Run</button></div>
                <div className="method"><span>&lt;td&gt;</span><button onClick={() => runDemo("td")}>Run</button></div>
                <div className="method"><span>&lt;caption&gt;</span><button onClick={() => runDemo("caption")}>Run</button></div>
                <div className="method"><span>&lt;colgroup&gt;</span><button onClick={() => runDemo("colgroup")}>Run</button></div>
                <div className="method"><span>&lt;col&gt;</span><button onClick={() => runDemo("col")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 11. Edit / Modification Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("edit")}>Edit / Modification Tags</h2>
            {openSection === "edit" && (
              <div className="content-box">
                <div className="method"><span>&lt;ins&gt;</span><button onClick={() => runDemo("ins")}>Run</button></div>
                <div className="method"><span>&lt;del&gt;</span><button onClick={() => runDemo("del")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 12. Programmatic Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("program")}>Programmatic Tags</h2>
            {openSection === "program" && (
              <div className="content-box">
                <div className="method"><span>&lt;template&gt;</span><button onClick={() => runDemo("template")}>Run</button></div>
                <div className="method"><span>&lt;slot&gt;</span><button onClick={() => runDemo("slot")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 13. SVG Root & Shapes */}
          <div className="section">
            <h2 onClick={() => toggleSection("svg")}>SVG Root Tags</h2>
            {openSection === "svg" && (
              <div className="content-box">
                <div className="method"><span>&lt;svg&gt;</span><button onClick={() => runDemo("svg")}>Run</button></div>
                <div className="method"><span>&lt;circle&gt;</span><button onClick={() => runDemo("circle")}>Run</button></div>
                <div className="method"><span>&lt;rect&gt;</span><button onClick={() => runDemo("rect")}>Run</button></div>
                <div className="method"><span>&lt;line&gt;</span><button onClick={() => runDemo("line")}>Run</button></div>
                <div className="method"><span>&lt;polygon&gt;</span><button onClick={() => runDemo("polygon")}>Run</button></div>
                <div className="method"><span>&lt;polyline&gt;</span><button onClick={() => runDemo("polyline")}>Run</button></div>
                <div className="method"><span>&lt;ellipse&gt;</span><button onClick={() => runDemo("ellipse")}>Run</button></div>
                <div className="method"><span>&lt;path&gt;</span><button onClick={() => runDemo("path")}>Run</button></div>
                <div className="method"><span>&lt;text&gt;</span><button onClick={() => runDemo("text")}>Run</button></div>
                <div className="method"><span>&lt;g&gt;</span><button onClick={() => runDemo("g")}>Run</button></div>
              </div>
            )}
          </div>

          {/* 14. MathML Tags */}
          <div className="section">
            <h2 onClick={() => toggleSection("math")}>MathML Tags</h2>
            {openSection === "math" && (
              <div className="content-box">
                <div className="method"><span>&lt;math&gt;</span><button onClick={() => runDemo("math")}>Run</button></div>
                <div className="method  "><span>&lt;mi&gt;</span><button onClick={() => runDemo("mi")}>Run</button></div>
                <div className="method"><span>&lt;mn&gt;</span><button onClick={() => runDemo("mn")}>Run</button></div>
                <div className="method"><span>&lt;mo&gt;</span><button onClick={() => runDemo("mo")}>Run</button></div>
                <div className="method"><span>&lt;mrow&gt;</span><button onClick={() => runDemo("mrow")}>Run</button></div>
                <div className="method"><span>&lt;msqrt&gt;</span><button onClick={() => runDemo("msqrt")}>Run</button></div>
                <div className="method"><span>&lt;mfrac&gt;</span><button onClick={() => runDemo("mfrac")}>Run</button></div>
              </div>
            )}
          </div>

        </div>

        {/* RIGHT SIDE — OUTPUT PANEL */}
        <div className="output-panel">
          <h2>Output / Result Panel</h2>

          {!output ? (
            <p>Select a tag from left and click <strong>Run</strong> to see description, demo and code.</p>
          ) : (
            <>
              <div className="output-header">
                <h3>{output.title}</h3>
                <button className="clear-btn" onClick={clearOutput}>Clear</button>
              </div>

              <p className="output-desc">{output.desc}</p>

              <h4>Demo Preview</h4>
              <div className="preview-box" dangerouslySetInnerHTML={{ __html: output.demo }} />

              <h4>HTML Code</h4>
              <pre className="code-box">{output.demo}</pre>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Working;
