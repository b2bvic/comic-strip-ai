# 50 Battle-Tested AI Prompts for Character Consistency Across Comic Panels

---

## The Problem

You spent 3 hours generating the perfect protagonist in Panel 1. Strong jawline, determined eyes, signature scar across the left cheek.

Panel 2: Different face. Softer features. No scar.

You regenerate. Panel 3: Worse. Costume changed colors. Hair parted on the wrong side.

By Panel 5, you're rage-clicking through 40 variations trying to get the same person twice.

This isn't a skill issue. Midjourney doesn't remember. DALL-E doesn't track continuity. Stable Diffusion starts fresh every prompt unless you force it otherwise.

Most tutorials show you the winner. They don't show the 30 failed generations before it. They don't show the workflow that makes consistency mechanical, not accidental.

---

## The Mechanism

Character consistency isn't about luck or endless regeneration. It's about prompt architecture.

Three levers control whether your AI remembers your characters:

1. **Weighted Parameters** — Force the model to prioritize specific features by assigning numerical weight to descriptors. "Blue eyes::2" hits harder than "blue eyes."

2. **Seed Anchoring** — Lock the random noise pattern that generates your image. Same seed + similar prompt = similar output.

3. **Reference Image Workflows** — Give the model a visual target instead of relying purely on text interpretation.

The prompts in this library manipulate all three levers simultaneously. They're not suggestions. They're load-bearing syntax.

---

## How to Use This Document

1. Find your character archetype (hero, villain, sidekick, civilian)
2. Match your art style (manga, superhero, realistic, cartoon)
3. Select your panel type (close-up, action, dialogue, establishing)
4. Copy the prompt. Paste it. Generate.
5. If drift occurs, use the troubleshooting section at the end.

Every prompt includes platform-specific syntax for Midjourney v6, DALL-E 3, and Stable Diffusion XL. Use the version matching your tool.

---

# PART 1: CHARACTER REFERENCE SHEET GENERATORS

Generate these first. These images become your visual anchors for all subsequent panels.

---

## Prompt 1: Hero Character Sheet (Midjourney)

```
character reference sheet, [CHARACTER NAME], [GENDER] [AGE RANGE], [BODY TYPE], [DISTINGUISHING FEATURES], front view, side view, back view, 3/4 view, consistent design, white background, professional comic art style, detailed character turnaround, same outfit in all views --ar 16:9 --v 6 --s 250
```

**Parameter notes:**
- `--s 250` increases stylization for cleaner linework
- `--ar 16:9` gives space for multiple views
- Always include "same outfit in all views" to prevent costume drift

**Example filled:**
```
character reference sheet, Marcus Kane, male early 30s, athletic build, scar across left cheek, short dark hair with gray streak, front view, side view, back view, 3/4 view, consistent design, white background, professional comic art style, detailed character turnaround, same outfit in all views, wearing black leather jacket and dark jeans --ar 16:9 --v 6 --s 250
```

---

## Prompt 2: Hero Character Sheet (DALL-E 3)

```
Create a professional character reference sheet for a comic book hero. The character is [GENDER], [AGE RANGE], [BODY TYPE], with [DISTINGUISHING FEATURES]. Show the character from front view, side profile, back view, and 3/4 angle, all arranged on a single white background. The character wears [OUTFIT DESCRIPTION]. Maintain exact consistency in facial features, body proportions, and clothing details across all four views. Style: clean comic book linework with flat colors.
```

**Usage note:** DALL-E responds better to natural language than parameter syntax. Be exhaustively specific about features you want preserved.

---

## Prompt 3: Hero Character Sheet (Stable Diffusion XL)

```
(character reference sheet:1.4), (turnaround:1.3), [CHARACTER NAME], [GENDER] [AGE], [BODY TYPE], [FACE DESCRIPTION], [DISTINGUISHING FEATURES], front view, side view, back view, 3/4 view, (consistent design:1.3), white background, professional comic art, detailed linework, [OUTFIT DESCRIPTION], (same character all views:1.4)
```

**Negative prompt:**
```
inconsistent features, different faces, varying proportions, messy background, blurry, low quality, different outfits, color variations
```

**Settings:**
- CFG Scale: 7-8
- Steps: 30-40
- Sampler: DPM++ 2M Karras

---

## Prompt 4: Villain Character Sheet (Midjourney)

```
character reference sheet, [VILLAIN NAME], [GENDER] [AGE], [BUILD], [SINISTER FEATURES], menacing expression, front view, side view, back view, 3/4 view, consistent villain design, dark color palette, white background for contrast, professional comic art style, detailed character turnaround, same costume all views --ar 16:9 --v 6 --s 200 --c 20
```

**Parameter notes:**
- `--c 20` adds slight chaos for more dynamic villain energy without breaking consistency
- Lower `--s 200` for grittier aesthetic

---

## Prompt 5: Sidekick Character Sheet (Midjourney)

```
character reference sheet, [SIDEKICK NAME], [GENDER] younger appearance, [BODY TYPE], [YOUTHFUL FEATURES], [DISTINCTIVE ELEMENT], front view, side view, back view, 3/4 view, consistent design, complementary color scheme to hero, white background, professional comic art style, detailed character turnaround, same outfit all views --ar 16:9 --v 6 --s 250
```

---

## Prompt 6: Civilian Character Sheet (DALL-E 3)

```
Create a character reference sheet for a civilian supporting character in a comic book. The character is [GENDER], [AGE], [OCCUPATION/ROLE], with [DISTINGUISHING EVERYDAY FEATURES]. Show four views: front, side profile, back, and 3/4 angle on white background. The character wears [CASUAL OUTFIT]. Maintain exact consistency in all views. Style: approachable, realistic comic art with clean lines.
```

---

# PART 2: PANEL-TYPE PROMPTS BY ARCHETYPE

Use these after generating your reference sheets. Reference sheets provide the visual anchor; these prompts generate specific panel content.

---

## HERO PROMPTS

### Prompt 7: Hero Close-Up — Determined Expression (Midjourney)

```
[CHARACTER NAME] portrait, extreme close-up, determined expression, [DISTINGUISHING FEATURES], dramatic lighting from above, comic book style, sharp linework, [SIGNATURE COLORS], looking directly at viewer, heroic intensity --ar 1:1 --v 6 --sref [YOUR REFERENCE URL] --sw 100
```

**Critical parameter:**
- `--sref [URL]` references your character sheet image
- `--sw 100` sets style reference weight to maximum

---

### Prompt 8: Hero Close-Up — Determined Expression (DALL-E 3)

```
Extreme close-up portrait of [CHARACTER NAME], a [GENDER] comic book hero with [DISTINGUISHING FEATURES]. Expression: fierce determination, jaw set, eyes focused. Lighting: dramatic from above casting shadows under brow. Include [SIGNATURE VISUAL ELEMENTS]. Style: bold comic book art with heavy inks and vibrant colors. Frame tightly on face and upper shoulders.
```

---

### Prompt 9: Hero Action — Punch/Strike (Midjourney)

```
[CHARACTER NAME] throwing powerful punch, dynamic action pose, [BODY TYPE] [DISTINGUISHING FEATURES], motion blur on fist, impact energy lines, dramatic foreshortening, comic book action style, [COSTUME COLORS], full body visible, high energy composition --ar 2:3 --v 6 --sref [REFERENCE URL] --sw 80
```

**Note:** Lower `--sw 80` gives more freedom for dynamic poses while maintaining character features.

---

### Prompt 10: Hero Action — Flying/Leaping (Midjourney)

```
[CHARACTER NAME] in mid-air, leaping between rooftops, [BODY TYPE] [COSTUME], cape or jacket flowing behind, arms forward, legs bent, city skyline below, dramatic upward angle, motion lines, comic book superhero style, night sky background --ar 2:3 --v 6 --sref [REFERENCE URL] --sw 85
```

---

### Prompt 11: Hero Action — Defensive Stance (DALL-E 3)

```
Full body illustration of [CHARACTER NAME] in defensive combat stance. [GENDER] hero with [DISTINGUISHING FEATURES] wearing [COSTUME]. Arms raised to block, weight on back leg, muscles tensed, ready to counter. Environment: [SETTING]. Dynamic angle from slightly below. Style: kinetic comic book art with speed lines and impact effects.
```

---

### Prompt 12: Hero Dialogue — Two-Shot Conversation (Midjourney)

```
[CHARACTER NAME] and [SECOND CHARACTER], medium shot, facing each other in conversation, [CHARACTER 1 DESCRIPTION], [CHARACTER 2 DESCRIPTION], speech bubble space above, neutral standing poses, comic panel composition, indoor lighting, [SETTING DESCRIPTION] --ar 16:9 --v 6 --sref [REFERENCE URL 1], [REFERENCE URL 2] --sw 90
```

---

### Prompt 13: Hero Dialogue — Over-Shoulder (DALL-E 3)

```
Over-the-shoulder shot in comic panel style. [CHARACTER NAME] seen from behind (shoulders and back of head visible) facing [SECOND CHARACTER] who is clearly visible and speaking. [SECOND CHARACTER DESCRIPTION]. Setting: [LOCATION]. Leave space in upper portion for dialogue balloon. Maintain character consistency with established designs.
```

---

### Prompt 14: Hero Establishing — Full Figure Introduction (Midjourney)

```
[CHARACTER NAME] standing heroically, full body shot, [COMPLETE COSTUME DESCRIPTION], [BODY TYPE] [DISTINGUISHING FEATURES], feet planted shoulder-width, hands on hips or at sides, looking toward camera, [SETTING] background, dramatic rim lighting, comic book cover style composition --ar 2:3 --v 6 --sref [REFERENCE URL] --sw 100
```

---

## VILLAIN PROMPTS

### Prompt 15: Villain Close-Up — Menacing Expression (Midjourney)

```
[VILLAIN NAME] portrait, extreme close-up, sinister smile, [DISTINGUISHING FEATURES], underlighting casting upward shadows, dramatic contrast, comic book villain style, [SIGNATURE COLORS], eyes narrowed with malicious intent --ar 1:1 --v 6 --sref [REFERENCE URL] --sw 100
```

---

### Prompt 16: Villain Close-Up — Cold Calculation (DALL-E 3)

```
Extreme close-up portrait of [VILLAIN NAME], [GENDER] comic book antagonist with [DISTINGUISHING FEATURES]. Expression: cold, calculating, emotionless assessment. Lighting: harsh side lighting creating half-shadow on face. Style: noir-influenced comic art with heavy blacks and limited color palette.
```

---

### Prompt 17: Villain Action — Power Display (Midjourney)

```
[VILLAIN NAME] unleashing power, [POWER TYPE] emanating from hands, dramatic wide stance, [COSTUME DESCRIPTION], energy crackling around figure, environment destruction nearby, low angle shot, villain dominance composition, comic book style --ar 2:3 --v 6 --sref [REFERENCE URL] --sw 85 --c 15
```

---

### Prompt 18: Villain Action — Confrontation Pose (Stable Diffusion XL)

```
(dynamic pose:1.3), [VILLAIN NAME], standing over defeated enemy, triumphant villain stance, (consistent character:1.4), [DISTINGUISHING FEATURES], [COSTUME], dramatic backlighting, comic book action style, detailed linework, [POWER EFFECTS]
```

**Negative prompt:**
```
inconsistent face, different costume, blurry, low quality, distorted proportions
```

---

### Prompt 19: Villain Dialogue — Monologue Pose (Midjourney)

```
[VILLAIN NAME] mid-speech, one hand raised gesturing, arrogant expression, [BODY TYPE] [COSTUME], medium shot, space for speech bubble, throne room or lair setting, dramatic lighting from below, comic panel composition --ar 16:9 --v 6 --sref [REFERENCE URL] --sw 95
```

---

### Prompt 20: Villain Establishing — Lair Introduction (DALL-E 3)

```
Full body establishing shot of [VILLAIN NAME] in their domain. [GENDER] antagonist with [DISTINGUISHING FEATURES] wearing [COSTUME]. Standing or seated in [LAIR DESCRIPTION]. Surrounded by [MINIONS/TECHNOLOGY/SYMBOLS OF POWER]. Composition emphasizes scale and dominance. Style: dramatic comic book art with deep shadows and threatening atmosphere.
```

---

## SIDEKICK PROMPTS

### Prompt 21: Sidekick Close-Up — Eager Expression (Midjourney)

```
[SIDEKICK NAME] portrait, close-up, eager determined expression, [YOUTHFUL FEATURES], [DISTINCTIVE ELEMENT], bright optimistic lighting, comic book style, [COSTUME COLORS], slight smile showing confidence --ar 1:1 --v 6 --sref [REFERENCE URL] --sw 100
```

---

### Prompt 22: Sidekick Action — Following Hero (Midjourney)

```
[SIDEKICK NAME] running behind [HERO NAME], action pose, [SIDEKICK DESCRIPTION] in motion, [HERO] slightly ahead and larger in frame, urban environment, comic book dynamic composition, motion blur on legs --ar 16:9 --v 6 --sref [SIDEKICK REF], [HERO REF] --sw 90
```

---

### Prompt 23: Sidekick Dialogue — Questioning (DALL-E 3)

```
Medium shot of [SIDEKICK NAME], a young [GENDER] with [DISTINGUISHING FEATURES] wearing [COSTUME]. Expression: curious, questioning, head slightly tilted. One hand raised in questioning gesture. Space above for dialogue balloon. Style: approachable comic book art maintaining character consistency.
```

---

### Prompt 24: Sidekick Action — Solo Heroic Moment (Midjourney)

```
[SIDEKICK NAME] in heroic solo action, [ACTION TYPE], proving themselves, [FULL CHARACTER DESCRIPTION], dramatic angle from below, determination on face, comic book style, energy and motion lines --ar 2:3 --v 6 --sref [REFERENCE URL] --sw 85
```

---

## CIVILIAN PROMPTS

### Prompt 25: Civilian Close-Up — Worried Expression (Midjourney)

```
[CIVILIAN NAME] portrait, close-up, worried concerned expression, [EVERYDAY FEATURES], soft natural lighting, realistic comic style, [CASUAL CLOTHING], looking slightly off-camera as if watching danger --ar 1:1 --v 6 --sref [REFERENCE URL] --sw 100
```

---

### Prompt 26: Civilian Action — Fleeing Danger (DALL-E 3)

```
Full body shot of [CIVILIAN NAME], [GENDER] [AGE] [APPEARANCE], running from danger. Expression: fear and urgency. Wearing [CASUAL OUTFIT]. Arms pumping, looking back over shoulder. Urban environment with implied threat (shadows, dust, debris) in background. Style: grounded comic book art with realistic proportions.
```

---

### Prompt 27: Civilian Dialogue — Explaining Situation (Midjourney)

```
[CIVILIAN NAME] speaking urgently, medium shot, hands gesturing explanatorily, [CHARACTER DESCRIPTION], office or home setting, natural indoor lighting, space for dialogue balloon, comic panel composition --ar 16:9 --v 6 --sref [REFERENCE URL] --sw 95
```

---

### Prompt 28: Civilian Establishing — Daily Life (Stable Diffusion XL)

```
(slice of life:1.2), [CIVILIAN NAME], casual pose, [EVERYDAY SETTING], (consistent character:1.4), [FULL DESCRIPTION], warm natural lighting, grounded comic art style, detailed background, relaxed atmosphere
```

---

# PART 3: ART STYLE MODIFIERS

Add these to any base prompt to shift the visual style while maintaining character consistency.

---

## Prompt 29: Manga Style Modifier (Midjourney)

Add to end of any prompt:
```
, manga art style, screen tone shading, Japanese comic aesthetic, clean linework, expressive eyes, dynamic speed lines --niji 6
```

**Note:** `--niji 6` activates Midjourney's anime-optimized model.

---

## Prompt 30: Manga Style Modifier (Stable Diffusion)

Add these to positive prompt:
```
, (manga style:1.4), (screentone:1.2), Japanese comic art, clean black linework, expressive anime features, high contrast
```

Recommended models: Anything V5, Counterfeit V3, or anime-fine-tuned checkpoints.

---

## Prompt 31: Western Superhero Style Modifier (Midjourney)

Add to end of any prompt:
```
, classic superhero comic art style, bold outlines, cel shading, dynamic anatomy, Jim Lee influence, vibrant primary colors --v 6 --s 200
```

---

## Prompt 32: Western Superhero Style Modifier (DALL-E 3)

Incorporate into prompt body:
```
Style: classic American superhero comic book art. Bold black outlines, heroic anatomy with dynamic musculature, vibrant saturated colors, dramatic shadows. Influenced by Jim Lee and John Byrne era Marvel and DC comics.
```

---

## Prompt 33: Realistic/Painted Style Modifier (Midjourney)

Add to end of any prompt:
```
, painted comic art style, Alex Ross influence, photorealistic rendering, dramatic oil painting textures, naturalistic lighting, muted sophisticated color palette --v 6 --s 150
```

---

## Prompt 34: Cartoon/Animated Style Modifier (Midjourney)

Add to end of any prompt:
```
, animated cartoon style, simplified shapes, bold flat colors, thick outlines, Disney influence, clean vector-like appearance, expressive exaggeration --v 6 --s 300
```

---

## Prompt 35: Noir/Gritty Style Modifier (Stable Diffusion)

Add to positive prompt:
```
, (noir comic style:1.4), high contrast black and white, heavy shadows, Sin City influence, rain-slicked streets, dramatic chiaroscuro lighting
```

Negative prompt add:
```
, bright colors, cheerful, soft lighting
```

---

# PART 4: CONSISTENCY ANCHORING TECHNIQUES

These aren't prompts. They're workflows. Use them when base prompts produce drift.

---

## Technique 36: Midjourney Seed Lock Method

**Step 1:** Generate an image you like. Note the seed number from `/info` or reaction details.

**Step 2:** For all subsequent panels of this character, add:
```
--seed [YOUR SEED NUMBER]
```

**Step 3:** Keep the character description identical. Change only pose, expression, and setting.

**Limitation:** Seed locking reduces variation. It doesn't guarantee consistency. Use with `--sref` for best results.

---

## Technique 37: DALL-E 3 Iterative Edit Method

**Step 1:** Generate initial character panel.

**Step 2:** Use ChatGPT's edit mode: "Keep the character exactly the same. Change [SPECIFIC ELEMENT]."

**Step 3:** For major pose changes, describe the new pose while explicitly listing features to preserve: "Same face shape, same scar, same eye color, same costume. New pose: sitting with arms crossed."

**Limitation:** Edit mode works best for small adjustments. Major changes may require regeneration.

---

## Technique 38: Stable Diffusion LoRA Training Workflow

**When to use:** You need 20+ panels of the same character. Training investment pays off.

**Step 1:** Generate 20-40 images of your character from reference sheet prompts. Include variety: different angles, expressions, lighting.

**Step 2:** Use Kohya_ss GUI to train a LoRA:
- Training steps: 1500-3000
- Learning rate: 1e-4 to 5e-5
- Batch size: 1-2
- Network rank: 32-128

**Step 3:** Invoke LoRA in prompts:
```
<lora:[YOUR_CHARACTER_NAME]:0.7-0.9> [CHARACTER NAME], [PANEL DESCRIPTION]
```

**Files required:** Training images plus text files with consistent character descriptions.

---

## Technique 39: Reference Image Composite Method (All Platforms)

**Step 1:** Generate character reference sheet (Prompts 1-6).

**Step 2:** Create a composite reference image:
- Front face (50% of frame)
- Key distinguishing feature close-up (25%)
- Full body in signature costume (25%)

**Step 3:** Use image-to-image or image reference features:
- Midjourney: Upload reference, use `--sref [URL]`
- DALL-E: Include reference in conversation, describe explicitly
- Stable Diffusion: Use ControlNet with reference or img2img at 0.3-0.5 denoising

---

## Technique 40: Weighted Feature Anchoring (Midjourney)

When a specific feature keeps disappearing, weight it:

```
[CHARACTER NAME], (scar on left cheek::2), (gray streak in hair::1.8), [REST OF DESCRIPTION]
```

**Syntax:** `(feature::weight)` where weight > 1 increases emphasis.

Stack multiple weighted features for complex characters. Don't exceed ::3 or results distort.

---

# PART 5: PANEL COMPOSITION PROMPTS

These control camera angle and framing. Combine with character prompts.

---

## Prompt 41: Establishing Wide Shot

```
wide establishing shot, [SETTING DESCRIPTION], [CHARACTER NAME] small in frame showing scale, environmental storytelling, comic book style, cinematic composition, [TIME OF DAY] lighting --ar 16:9
```

---

## Prompt 42: Medium Two-Shot

```
medium shot, two characters, [CHARACTER 1] and [CHARACTER 2] facing each other, waist-up framing, [SETTING], even lighting on both faces, space for dialogue balloons, comic panel composition --ar 16:9
```

---

## Prompt 43: Close-Up Reaction Shot

```
extreme close-up, [CHARACTER NAME], [EMOTION] reaction, only face fills frame, [DISTINGUISHING FEATURES], dramatic expression, single emotion read, comic book style --ar 1:1
```

---

## Prompt 44: Dutch Angle Tension Shot

```
dutch angle, tilted camera 15-20 degrees, [CHARACTER NAME] in [ACTION], creates visual tension and unease, dynamic composition, comic book style, [SETTING] --ar 2:3
```

---

## Prompt 45: Bird's Eye View

```
bird's eye view, looking straight down, [CHARACTER NAME] small in frame, [SETTING LAYOUT] visible below, dramatic height perspective, comic book style --ar 1:1
```

---

## Prompt 46: Worm's Eye Hero Shot

```
worm's eye view, looking up from ground level, [CHARACTER NAME] towering above, heroic and imposing, dramatic foreshortening, sky or ceiling visible behind, comic book style --ar 2:3
```

---

## Prompt 47: Over-the-Shoulder Dialogue

```
over the shoulder shot, [CHARACTER 1] back and shoulder in foreground, [CHARACTER 2] face clearly visible speaking, medium depth of field, conversation framing, comic panel composition --ar 16:9
```

---

## Prompt 48: Split Panel Action

```
split panel composition, same [CHARACTER NAME] shown in two sequential moments of action, left side: [ACTION PHASE 1], right side: [ACTION PHASE 2], continuous motion represented, comic book style --ar 16:9
```

---

## Prompt 49: Silhouette Drama Shot

```
silhouette shot, [CHARACTER NAME] in dramatic pose, backlit by [LIGHT SOURCE], only outline visible, high contrast, noir comic influence, mysterious atmosphere --ar 2:3
```

---

## Prompt 50: Insert Detail Shot

```
insert shot, extreme close-up on [OBJECT OR DETAIL], [CHARACTER'S] hand interacting with it, shallow depth of field, narrative focus on this element, comic book style --ar 1:1
```

---

# PART 6: TROUBLESHOOTING GUIDE

When consistency breaks despite using these prompts, diagnose here.

---

## Problem: Face Changes Between Panels

**Likely cause:** Insufficient facial feature specification or low reference weight.

**Solutions:**
1. Add exhaustive facial description: "oval face shape, strong jaw, straight nose, thick eyebrows, brown eyes, full lips"
2. Increase `--sw` to 100 in Midjourney
3. For Stable Diffusion, increase character LoRA weight or add `(consistent face:1.4)` to positive prompt
4. Use the same seed for facial close-ups

---

## Problem: Costume Colors Drift

**Likely cause:** Color names interpreted differently across generations.

**Solutions:**
1. Use hex codes where supported: "jacket color #2B4570"
2. Add reference image of costume specifically
3. Weight color descriptions: "(deep navy blue jacket::1.5)"
4. For Stable Diffusion, use color LoRAs or explicitly negative prompt wrong colors

---

## Problem: Body Proportions Inconsistent

**Likely cause:** Pose changes affecting how model interprets build.

**Solutions:**
1. Specify exact build in every prompt: "athletic build, broad shoulders, narrow waist, 6 foot 1 inch tall"
2. Use ControlNet pose references in Stable Diffusion
3. Lower variation settings (`--c` in Midjourney)
4. Generate from consistent angles when proportion matters

---

## Problem: Distinguishing Features Disappear

**Likely cause:** Feature not emphasized enough or conflicting with style.

**Solutions:**
1. Double-weight critical features: "(scar across left cheek::2)"
2. Move feature earlier in prompt (earlier = higher priority in most models)
3. Create separate reference image zoomed on the feature
4. Explicitly negative prompt absence: negative: "unblemished skin, no scars"

---

## Problem: Style Drifts Between Panels

**Likely cause:** Model interpreting style descriptors inconsistently.

**Solutions:**
1. Use exact same style suffix on every prompt
2. Add `--sref` of a stylistically correct panel to subsequent generations
3. For Stable Diffusion, use same checkpoint and settings every time
4. Create style reference grid: 4 panels demonstrating correct style, use as reference

---

## Problem: Background Changes When It Shouldn't

**Likely cause:** Background not specified or specified differently.

**Solutions:**
1. Generate background separately, composite in post
2. Specify background identically: "same warehouse interior, exposed brick walls, industrial lighting"
3. Use Midjourney's `--no` to exclude unwanted background elements
4. For consistent locations, create a location reference sheet like character sheets

---

## Problem: Multiple Characters Look Similar

**Likely cause:** Model defaulting to generic features when generating multiple characters.

**Solutions:**
1. Maximize distinction in descriptions: different builds, ages, coloring
2. Generate characters separately, composite
3. Weight distinguishing features for each: "(Character A red hair::1.8) (Character B bald::1.8)"
4. Use separate LoRAs for each character in Stable Diffusion

---

## Problem: Generated Image Doesn't Match Reference Sheet

**Likely cause:** Reference weight too low or conflicting prompt elements.

**Solutions:**
1. Increase `--sw` toward 100
2. Remove conflicting descriptors from panel prompt
3. Simplify prompt to only essential elements
4. Use image-to-image with reference at higher strength

---

# IMPLEMENTATION CHECKLIST

Before generating any panel:

- [ ] Character reference sheet created and saved
- [ ] Reference image URL or file accessible
- [ ] Distinguishing features listed explicitly
- [ ] Costume description documented verbatim
- [ ] Art style modifier selected
- [ ] Panel composition chosen
- [ ] Platform-appropriate prompt format ready

After generating each panel:

- [ ] Face matches reference sheet
- [ ] Costume colors correct
- [ ] Distinguishing features visible
- [ ] Body proportions consistent
- [ ] Style matches previous panels
- [ ] Background appropriate
- [ ] Composition supports narrative

---

## Your Next Step

Pick one character. Generate the reference sheet using Prompts 1-6. Save that image URL or file.

Generate three test panels: one close-up, one action, one dialogue.

Compare to the reference sheet.

If features match, your workflow is calibrated. If they drift, the troubleshooting section tells you exactly where to adjust.

The prompts work. The question is whether you'll use them systematically or keep rage-clicking through random generations.

---

*ComicStripAI.com*

*Download the Notion template version of this library: [LINK]*
*Questions? Reply to the email that delivered this document.*
