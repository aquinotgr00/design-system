import{k as a,o as s,c as e,b as n}from"./app.534b42cc.js";const y=JSON.parse('{"title":"Editor Setup","description":"","frontmatter":{},"headers":[{"level":2,"title":"Terminal Setup","slug":"terminal-setup","link":"#terminal-setup","children":[{"level":3,"title":"Install zsh","slug":"install-zsh","link":"#install-zsh","children":[]},{"level":3,"title":"Install omz (oh-my-zsh)","slug":"install-omz-oh-my-zsh","link":"#install-omz-oh-my-zsh","children":[]}]},{"level":2,"title":"NodeJS Setup","slug":"nodejs-setup","link":"#nodejs-setup","children":[{"level":3,"title":"Install nvm","slug":"install-nvm","link":"#install-nvm","children":[]}]}],"relativePath":"docs/editor-setup.md"}'),l={name:"docs/editor-setup.md"},t=n(`<h1 id="editor-setup" tabindex="-1">Editor Setup <a class="header-anchor" href="#editor-setup" aria-hidden="true">#</a></h1><blockquote><p>Editor and Environment setup for maximizing developer experient.</p></blockquote><h2 id="terminal-setup" tabindex="-1">Terminal Setup <a class="header-anchor" href="#terminal-setup" aria-hidden="true">#</a></h2><p>We recommend using <code>zsh</code> instead of <code>bash</code></p><h3 id="install-zsh" tabindex="-1">Install zsh <a class="header-anchor" href="#install-zsh" aria-hidden="true">#</a></h3><details><summary><b>Ubuntu</b></summary><h4 id="install-with-apt" tabindex="-1">Install with apt <a class="header-anchor" href="#install-with-apt" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh</span></span>
<span class="line"></span></code></pre></div><h4 id="switch-default-shell" tabindex="-1">Switch default shell <a class="header-anchor" href="#switch-default-shell" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">chsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/zsh</span></span>
<span class="line"></span></code></pre></div><p>Then logout, and login again to see it changed.</p></details><details><summary><b>MacOS</b></summary><p>Luckily, latest OSX use zsh as default terminal shell so you have to do nothing.</p></details><h3 id="install-omz-oh-my-zsh" tabindex="-1">Install omz (oh-my-zsh) <a class="header-anchor" href="#install-omz-oh-my-zsh" aria-hidden="true">#</a></h3><p>Comming soon...</p><h2 id="nodejs-setup" tabindex="-1">NodeJS Setup <a class="header-anchor" href="#nodejs-setup" aria-hidden="true">#</a></h2><h3 id="install-nvm" tabindex="-1">Install nvm <a class="header-anchor" href="#install-nvm" aria-hidden="true">#</a></h3><p><code>nvm</code> allows you to quickly install and use different versions of node via the command line. See <a href="https://github.com/nvm-sh/nvm#installing-and-updating" target="_blank" rel="noreferrer">Installation Guide</a> for more information.</p>`,12),o=[t];function i(r,d,p,h,c,u){return s(),e("div",null,o)}const C=a(l,[["render",i]]);export{y as __pageData,C as default};