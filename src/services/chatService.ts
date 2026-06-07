export function generateSpiritualResponse(msg: string): string {
  const m = msg.toLowerCase();

  if (m.includes('peace') || m.includes('anxiety') || m.includes('stress') || m.includes('worried') || m.includes('calm')) {
    return `### Hare Krishna, dear seeker. ✨

Real peace enters when we quiet the ego and align our lives with the Supreme Will. Bhagavad Gita (2.70) teaches us:

> *āpūryamāṇam acala-pratiṣṭhaṁ samudram āpaḥ praviśanti yadvat*
> "As the ocean remains undisturbed though rivers constantly flow into it, so the peaceful person remains unmoved by the constant flow of desires."

**Practices for inner peace:**
1. **Chant the Maha-Mantra:** *Hare Krishna Hare Krishna, Krishna Krishna Hare Hare / Hare Rama Hare Rama, Rama Rama Hare Hare*
2. **Selfless Service (Seva):** One act of giving daily, expecting nothing in return.
3. **Prasadam:** Accept pure vegetarian food offered to the Lord.

The restless mind finds its rest only in devotion. 🙏`;
  }

  if (m.includes('karma') || m.includes('destiny') || m.includes('future') || m.includes('fate') || m.includes('action')) {
    return `### Joyful greetings, sincere soul. 🌸

Karma is not punishment — it is a loving mirror of our choices. Bhagavad-gita (18.66) assures us:

> *sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja*
> "Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions — do not fear."

When every action is offered as a flower at the lotus feet of the Lord, the chain of karma dissolves. Act with love, not with craving for results, and your destiny becomes divine. 🌺`;
  }

  if (m.includes('guru') || m.includes('lineage') || m.includes('prabhupada') || m.includes('teacher') || m.includes('parampara')) {
    return `### Pranams. 🙏

A true guru is a transparent medium through which divine love passes — not an ordinary human, but a vessel of grace. Sri Chaitanya Mahaprabhu instructed:

> *yāre dekha, tāre kaha 'kṛṣṇa'-upadeśa*
> "Instruct everyone you meet in the teachings of Sri Krishna."

Our lineage flows in an unbroken chain (*Parampara*): from Sri Krishna → Brahma → Narada → Vyasa → Madhvacharya → through the ages to Srila Bhaktisiddhanta Saraswati Thakura and Srila A.C. Bhaktivedanta Swami Prabhupada.

Seek a realized soul who lives what they teach. Their grace accelerates the spiritual journey immeasurably.`;
  }

  if (m.includes('meditation') || m.includes('mantra') || m.includes('chant') || m.includes('japa') || m.includes('kirtan')) {
    return `### Dear devotee, 🕉️

The Maha-Mantra is the supreme meditation for this age of Kali. Brihan-Naradiya Purana declares:

> *harer nāma harer nāma harer nāmaiva kevalam*
> *kalau nāsty eva nāsty eva nāsty eva gatir anyathā*
> "In this age of Kali, the only way, the only way, the only way of deliverance is chanting the holy name of the Lord."

**How to practice Japa:**
- Hold tulasi beads gently; chant one bead at a time
- Minimum 16 rounds daily (1,728 mantras)
- Chant clearly, hearing each syllable with full attention
- Sit quietly in the early morning (Brahma-muhurta) if possible

Each holy name is non-different from the Supreme Person Himself. 🙏`;
  }

  if (m.includes('yoga') || m.includes('bhakti') || m.includes('devotion') || m.includes('service')) {
    return `### Radhe Radhe! 🌸

Of all paths of yoga, Bhakti Yoga — the yoga of pure devotion — is declared supreme. Bhagavad-gita (6.47):

> *yoginām api sarveṣāṁ mad-gatenāntar-ātmanā*
> *śraddhāvān bhajate yo māṁ sa me yuktatamo mataḥ*
> "Of all yogis, the one who worships Me with faith and full inner absorption is most intimately united with Me."

The nine processes of Bhakti — hearing, chanting, remembering, serving the lotus feet, worshiping, praying, becoming a servant, befriending, and fully surrendering — are open to everyone regardless of birth or background. Begin with hearing and chanting. 🙏`;
  }

  if (m.includes('death') || m.includes('afterlife') || m.includes('soul') || m.includes('reincarnation') || m.includes('rebirth')) {
    return `### Dear eternal soul. ✨

You are not this body — you are the immortal *atma* dwelling within it. Bhagavad-gita (2.20) reassures:

> *na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ*
> "The soul is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval."

Death is merely the soul's departure from one temporary vehicle to another. The goal of human life — liberation (*moksha*) — is to return to our eternal home, the spiritual world, never to take birth in material existence again. 🌸`;
  }

  if (m.includes('purpose') || m.includes('dharma') || m.includes('meaning') || m.includes('life') || m.includes('goal')) {
    return `### Dear seeker of truth. 🕉️

The supreme purpose of human life is self-realization — to understand who we truly are and our eternal relationship with the Supreme. Srimad Bhagavatam (1.2.9) declares:

> *dharmasya hy āpavargyasya nārtho 'rthāyopakalpate*
> "The highest dharma of humanity is that which leads to the ultimate liberation of the soul — not merely material prosperity."

Your *svadharma* — your unique duty based on your nature and situation — when performed as an offering to the Lord, becomes the path itself. Ask not "What do I get?" but "How may I serve?" 🙏`;
  }

  if (m.includes('scripture') || m.includes('gita') || m.includes('bhagavatam') || m.includes('vedas') || m.includes('upanishad')) {
    return `### Respected devotee. 📿

The Vedic scriptures form the world's most ancient body of spiritual wisdom. Their essence is summarized in the Bhagavad-gita — the direct words of Sri Krishna to the archer Arjuna on the battlefield of Kurukshetra.

**Key texts for seekers:**
- **Bhagavad-gita As It Is** — The direct path to surrender and liberation
- **Srimad Bhagavatam (12 volumes)** — The ripened fruit of the Vedic tree
- **Sri Caitanya-caritamrta** — The life and teachings of Sri Chaitanya Mahaprabhu
- **Nectar of Devotion** — The science of pure devotional service

Begin with the Gita. Read it daily — even one verse with sincere contemplation can transform the heart. 🌺`;
  }

  if (m.includes('love') || m.includes('relationship') || m.includes('heart') || m.includes('grief') || m.includes('loneliness')) {
    return `### Dear heart. 💛

Human love, however sweet, is a pale reflection of divine love (*Prema*). We seek in relationships what only the Supreme can give — unconditional, eternal love. Srimad Bhagavatam (10.33.39) reveals:

> *vikrīḍitaṁ vraja-vadhūbhir idaṁ ca viṣṇoḥ*
> "The transcendental pastimes of Krishna with the *gopis* of Vraja are not ordinary — they are the highest expression of divine love."

When we redirect our love toward the source of all love — Krishna — every relationship becomes sanctified. Love the Lord first; love of others flows naturally, without possession or pain. 🌸`;
  }

  return `### Hare Krishna! 🙏

The ancient Vedic tradition offers three eternal pillars for the spiritual seeker:

- **Śravaṇam** — Hear the sacred scriptures and the glories of the Supreme
- **Kīrtanam** — Sing and chant the holy names with feeling
- **Smaraṇam** — Remember the divine presence in all living entities

Bhagavad-gita (18.65) contains the most personal instruction of all:

> *man-manā bhava mad-bhakto mad-yājī māṁ namaskuru*
> "Always think of Me, become My devotee, worship Me, and offer your respects to Me."

Please share what weighs on your heart — questions on **mantra, karma, guru lineage, yoga, the scriptures, or spiritual practice** are all welcome. May your path be filled with light. ✨`;
}
