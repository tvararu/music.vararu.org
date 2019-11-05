import slugify from "./slugify";

const assertions = [
  ["A$AP Ferg", "asap-ferg"],
  ["Bikini Bandits, Kill! Kill! Kill!", "bikini-bandits-kill-kill-kill"],
  ["Chrono.naut / Nuclear Guru", "chrononaut-nuclear-guru"],
  ["Cruel & Unusual", "cruel-unusual"],
  ["Disco Monster (Remixes)", "disco-monster-remixes"],
  ["Past, Present & Future", "past-present-future"],
  [
    'printf("shiver in eternal darkness/n");',
    "printf-shiver-in-eternal-darknessn"
  ],
  ["Vampire: The Masquerade - Bloodlines", "vampire-the-masquerade-bloodlines"]
];

assertions.forEach(([input, expected]) => {
  it(`generates correct slug for ${input}: ${expected}`, () => {
    expect(slugify(input)).toEqual(expected);
  });
});
