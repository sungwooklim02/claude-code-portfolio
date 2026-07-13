/* STRATA 포트폴리오 렌더러 — window.PORTFOLIO(data.js) 소비 */
(function () {
  const P = window.PORTFOLIO
  const DESC = window.SCREEN_DESC || {}
  const ALL_SCREENS = (window.ALL_SCREENS && window.ALL_SCREENS.length) ? window.ALL_SCREENS : (P.all_shots || [])
  const descOf = (key) => DESC[key] || ''
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e }
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]))

  // ── 테마 ──
  const savedTheme = localStorage.getItem('strata_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', savedTheme)
  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', cur); localStorage.setItem('strata_theme', cur)
    document.getElementById('theme-btn').textContent = cur === 'dark' ? '☀' : '☾'
  }

  // ── 라이트박스 ──
  const lb = el('div', 'lightbox')
  lb.innerHTML = '<button class="close" aria-label="close">✕</button><figure><img alt=""><figcaption><b></b><span></span></figcaption></figure>'
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.close')) lb.classList.remove('on', 'zoomed') })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.classList.remove('on', 'zoomed') })
  // 이미지 탭 = fit ↔ 원본 크기 토글(모바일에서 스크린샷 텍스트 판독 — 확대 후 스크롤/팬)
  lb.querySelector('img').addEventListener('click', (e) => { e.stopPropagation(); lb.classList.toggle('zoomed') })
  function openLightbox(src, title, desc) {
    lb.classList.remove('zoomed')
    lb.querySelector('img').src = src
    lb.querySelector('figcaption b').textContent = title || ''
    lb.querySelector('figcaption span').textContent = desc || ''
    lb.classList.add('on')
  }

  // ── 상단바 ──
  const topbar = el('header', 'topbar')
  const nav = P.apps.map((a) => `<a href="#${a.app}">${esc(a.product_name)}</a>`).join('')
  topbar.innerHTML = `<div class="wrap">
    <span class="brand">${esc(P.brand || 'STRATA')}<span>.</span></span>
    <nav class="navlinks">${nav}<a href="#all">전체 화면</a></nav>
    <button class="theme-btn" id="theme-btn" aria-label="테마 전환">${savedTheme === 'dark' ? '☀' : '☾'}</button>
  </div>`

  // ── 히어로 ──
  const hero = el('section', 'hero')
  const hm = (P.hero_metrics || []).map((m) => `<div class="m"><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join('')
  hero.innerHTML = `<div class="wrap">
    <div class="eyebrow">${esc(P.eyebrow || 'PRODUCT PORTFOLIO')}</div>
    <h1>${esc(P.headline)}</h1>
    <p class="lead">${esc(P.lead)}</p>
    <div class="hero-metrics">${hm}</div>
  </div>`

  // ── 앱 케이스스터디 ──
  function renderCase(a, i) {
    const sec = el('section', 'case'); sec.id = a.app
    const stack = (a.tech_stack || []).map((s) => `<span class="chip">${esc(s)}</span>`).join('')
    const metrics = (a.headline_metrics || []).map((m) =>
      `<div class="metric"><b>${esc(m.value)}</b><div class="lbl">${esc(m.label)}</div>${m.context ? `<div class="ctx">${esc(m.context)}</div>` : ''}</div>`).join('')
    const challenges = (a.challenges || []).map((c) => `<div class="challenge">
      <h4>${esc(c.title)}</h4>
      <div class="row">
        <div><div class="t">문제</div><div class="prob">${esc(c.problem)}</div></div>
        <div><div class="t">해결</div><div class="sol">${esc(c.solution)}</div></div>
      </div>
      ${c.metric ? `<div class="metric-pill">${esc(c.metric)}</div>` : ''}
    </div>`).join('')
    const whynot = (a.why_not || []).map((w) => `<li><b>${esc(w.alternative)}</b> — ${esc(w.reason)}</li>`).join('')
    const lims = (a.limitations || []).map((l) => `<li>${esc(l)}</li>`).join('')
    const gid = `gal-${a.app}`

    sec.innerHTML = `<div class="wrap">
      <div class="case-top">
        <div>
          <div class="kicker">${String(i + 1).padStart(2, '0')} · Case Study</div>
          <h2>${esc(a.product_name)}</h2>
          <div class="tagline">${esc(a.tagline)}</div>
          ${a.live_url ? `<a class="live-demo-btn" href="${esc(a.live_url)}" target="_blank" rel="noopener">▶ 라이브 체험하기 <span>실제 로그인 · test / 1234</span></a>` : ''}
          <div class="domain">${esc(a.domain)}</div>
          <div class="stack">${stack}</div>
          ${a.architecture_summary ? `<div class="arch">${esc(a.architecture_summary)}</div>` : ''}
        </div>
        <div class="metrics">${metrics}</div>
      </div>
      <div class="challenges">${challenges}</div>
      ${(whynot || lims) ? `<div class="twocol">
        ${whynot ? `<div class="note whynot"><h4>기각한 대안 · Why not</h4><ul>${whynot}</ul></div>` : ''}
        ${lims ? `<div class="note"><h4>정직한 한계</h4><ul>${lims}</ul></div>` : ''}
      </div>` : ''}
      <div class="gallery-head">
        <h3>화면</h3>
        <div class="theme-toggle-shot" data-gal="${gid}">
          <button class="on" data-theme="light">라이트</button><button data-theme="dark">다크</button>
        </div>
      </div>
      <div class="gallery" id="${gid}"></div>
    </div>`
    return sec
  }

  // 갤러리 채우기(라이트/다크 토글)
  function fillGallery(a) {
    const grid = document.getElementById(`gal-${a.app}`)
    function paint(theme) {
      grid.innerHTML = ''
      ;(a.hero_shots || []).forEach((sh) => {
        const src = `shots/${a.app}/${sh}.${theme}.png`
        const name = sh.split('/').pop()
        const d = descOf(`${a.app}/${sh}`)
        const card = el('div', 'shot')
        card.innerHTML = `<img loading="lazy" src="${src}" alt="${esc(a.product_name)} ${esc(name)}"><div class="cap"><b>${esc(name)}</b>${d ? `<span>${esc(d)}</span>` : ''}</div>`
        card.addEventListener('click', () => openLightbox(src, name, d))
        grid.appendChild(card)
      })
    }
    paint('light')
    const tog = document.querySelector(`.theme-toggle-shot[data-gal="gal-${a.app}"]`)
    tog.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return
      tog.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on')
      paint(b.getAttribute('data-theme'))
    })
  }

  // ── 전체 화면 갤러리 ──
  function renderAll() {
    const sec = el('section', 'case'); sec.id = 'all'
    sec.innerHTML = `<div class="wrap">
      <div class="kicker">Appendix</div><h2>전체 화면 · ${P.total_shots || ''}장</h2>
      <div class="domain">3개 앱 전 화면을 라이트/다크 2벌로 결정론적 캡처(Playwright · page.clock 고정 · reduced-motion).</div>
      <div class="gallery-head"><h3></h3></div>
      <div class="gallery" id="gal-all"></div></div>`
    return sec
  }
  function fillAll() {
    const grid = document.getElementById('gal-all')
    ALL_SCREENS.forEach((s) => {
      const src = `shots/${s}.light.png`
      const parts = s.split('/'); const label = `${parts[0]} · ${parts.slice(1).join('/')}`
      const d = descOf(s)
      const card = el('div', 'shot')
      card.innerHTML = `<img loading="lazy" src="${src}" alt="${esc(label)}"><div class="cap"><b>${esc(label)}</b>${d ? `<span>${esc(d)}</span>` : ''}</div>`
      card.addEventListener('click', () => openLightbox(src, label, d))
      grid.appendChild(card)
    })
  }

  // ── 조립 ──
  const root = document.getElementById('app')
  root.appendChild(topbar); root.appendChild(hero)
  P.apps.forEach((a, i) => root.appendChild(renderCase(a, i)))
  if (ALL_SCREENS.length) root.appendChild(renderAll())
  const foot = el('footer'); foot.innerHTML = `<div class="wrap">
    <span>© 2026 STRATA 제품 포트폴리오</span>
    <span>${(P.repos || []).map((r) => `<a href="${r.url}">${esc(r.name)}</a>`).join(' · ')}</span>
    <span class="built">Built with Claude Code</span></div>`
  root.appendChild(foot)
  document.body.appendChild(lb)

  P.apps.forEach(fillGallery)
  if (ALL_SCREENS.length) fillAll()
  document.getElementById('theme-btn').addEventListener('click', toggleTheme)
})();
