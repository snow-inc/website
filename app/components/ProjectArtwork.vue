<script setup lang="ts">
defineProps<{ tone: string }>();
</script>
<template>
  <div class="project-artwork" :class="`art-${tone}`" aria-hidden="true">
    <div v-if="tone === 'forma'" class="forma-window art-window">
      <div class="mock-nav">
        <b>forma<span>*</span></b
        ><span>Studio &nbsp; Projects &nbsp; Contact ↗</span>
      </div>
      <div class="forma-title">
        Spaces for<br /><i>living well.</i
        ><span>Architecture with purpose.<br />Designed around you.</span>
      </div>
      <div class="architecture">
        <div class="building-back" />
        <div class="building-front"><i /><i /><i /></div>
        <div class="building-ground" />
        <div class="building-shadow" />
        <div class="plant"><i /><i /><i /></div>
      </div>
      <div class="mock-bottom">
        INDEPENDENT ARCHITECTURE STUDIO <span>EXPLORE OUR SPACES ↘</span>
      </div>
    </div>
    <div v-else-if="tone === 'orbit'" class="orbit-window art-window">
      <aside class="orbit-sidebar">
        <b>◉ orbit</b>
        <div class="mock-person">G <span>My workspace⌄</span></div>
        <span class="selected">▦ &nbsp; Overview</span
        ><span>▧ &nbsp; Projects</span><span>☷ &nbsp; My tasks</span
        ><span>◷ &nbsp; Activity</span><small>WORKSPACES</small
        ><span>◉ &nbsp; Personal</span><span>◈ &nbsp; Design team</span>
        <div class="sidebar-bottom">⚙ &nbsp; Settings</div>
      </aside>
      <div class="orbit-main">
        <div class="orbit-top">
          Workspace / Overview <span>⌘ K &nbsp; ◉</span>
        </div>
        <div class="orbit-greeting">
          <small>MONDAY, OCTOBER 12</small>
          <h4>A little focus. A lot of possibility.</h4>
          <p>Let’s make room for your best work.</p>
        </div>
        <div class="orbit-stats">
          <div>
            <small>In progress</small><b>12 <i>↗</i></b>
          </div>
          <div>
            <small>Completed</small><b>28 <i>✓</i></b>
          </div>
          <div>
            <small>Upcoming</small><b>06 <i>◷</i></b>
          </div>
        </div>
        <div class="orbit-projects">
          <b>Your projects <span>View all ↗</span></b>
          <div>
            <i class="project-square">F</i
            ><span>Forma website<small>Design & development</small></span
            ><label>In progress</label>
          </div>
          <div>
            <i class="project-square peach">B</i
            ><span>Brand exploration<small>Identity & strategy</small></span
            ><label>In review</label>
          </div>
          <div>
            <i class="project-square purple">S</i
            ><span>Something new<small>Ideas & experiments</small></span
            ><label>Planning</label>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="tone === 'fieldnotes'" class="field-window art-window">
      <div class="mock-nav">
        <b>fieldnotes<span>*</span></b
        ><span>Stories &nbsp; Places &nbsp; About ↗</span>
      </div>
      <div class="contour contour-one" />
      <div class="contour contour-two" />
      <div class="contour contour-three" />
      <div class="field-title">
        <small>AN INDEPENDENT JOURNAL</small>
        <h4>Take the<br /><i>longer way.</i></h4>
        <p>Stories from out there.<br />For the explorer in all of us.</p>
        <span>FIND YOUR NEXT STORY ↗</span>
      </div>
      <div class="field-stamp">GET<br />LOST<br /><span>↗</span></div>
      <div class="field-bottom">
        LESS SCROLLING. MORE WANDERING. <span>VOL. 01 / 2026</span>
      </div>
    </div>
    <div v-else class="goodkind-window art-window">
      <div class="mock-nav">
        <b>goodkind<span>*</span></b
        ><span>The collection &nbsp; Our story &nbsp; Bag (0)</span>
      </div>
      <div class="goodkind-title">
        <h4>Good things.<br /><i>Every day.</i></h4>
        <p>Thoughtful objects for<br />the beautifully ordinary.</p>
        <span>MEET YOUR NEW FAVOURITES ↗</span>
      </div>
      <div class="still-life">
        <div class="vase"><i /><span /></div>
        <div class="vase-shadow" />
        <div class="cup"><i /></div>
        <div class="small-fruit" />
      </div>
      <div class="mock-bottom">
        LESS, BUT LOVELIER. <span>MADE FOR THE EVERYDAY ↗</span>
      </div>
    </div>
  </div>
</template>
