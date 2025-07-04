A friend insists: “if the Singularity is possible, it will happen.”

This sort of confidence isn’t unusual. People often treat the technological Singularity—a hypothetical runaway explosion of machine intelligence—as not just as possibility, but an inevitability.

While I’m somewhat sympathetic to views that a Singularity is a possibility for us, I am not nearly as sympathetic to abuses of logical concepts like possibility and necessity.

This is a needlessly verbose and involved disagreement of my friend’s claim (accompanied by the sketch of a proof in from modal logic for the logic-interested).

---

There’s a common confusion here: mistaking something being *possible* for it being *necessary*. At the risk of strawman-ing my friend’s claim: just because it is *possible* that I will train really hard and win the Olympics rowing singles doesn’t mean it is necessary that this would happen—even though I tried really hard on my rowing team in high school. Likewise, I can imagine a world where the Singularity never arrives: AI progress stalls, policy intervenes, or humanity simply loses interest. Whether or not that *will* be the case, it means that the Singularity is not *necessary*, but at best contingent.

“Potato (read ‘po-tay-toe’) / Potato (read ‘poe-tah-toe’).”

Isn’t that just semantics? Maybe. But semantics matter.
<!-- "do things" link to comment-->
Language is perhaps our best tool to do things. The ways in which we use language—carelessly, carefully—determine our reality. Our use (and misuse) of language shapes the very ways we think (and can think). Consider the term “gaslight” that was not prevalent in our lexicon until relatively recently. Many victims of gaslighting did not have the words to express their suffering. But words and semantics allow us to make sense of the ineffable.

So, semantics matter. Especially when they shape our beliefs about the future. Saying something will happen because it can is a sleight of hand—an appeal to possibility masquerading as destiny. It actively harms our free choice to make sense of our technological progress and ensure we continue to trudge forwards together towards something with hope and with caution. It’s precisely because the Singularity is contingent that it’s worth talking now.

### For the logicians / logically curious

### My friend's claim

Let *p* = “A Singularity occurs.” To be as charitable as possible, the claim roughly amounts to:

(1) ◊*p* → *p*: that is, if the Singularity is possible, then it will occur in our world.

Now, while this looks suspicious, certain modal systems (like S5) can make similar-looking inferences. For example, under axiom 5 of S5:

(A) ☐(*p* → ☐*p*): it is a necessity that if *p* is true, then it's necessarily so.

Consider an arbitrary Kripke model ℳ = ⟨W,R,V⟩; where W denotes worlds, R accessibility relations, and V valuation. Let's denote our world *w* ∈ W.

Now suppose we assume ◊p — that is, in some world *v*, accessible from our world *w*, *p* holds. That is:

ℳ, *v* ⊩ *p* where ∃*v* ∈ W : R<sub>*wv*</sub>.

Then, from (A), we know:

ℳ, *v* ⊩ *p* → ☐*p*

So ℳ, *v* ⊩ ☐*p*

But if accessibility is symmetric (as in S5) and R<sub>*wv*</sub>, then ℳ, *w* ⊩ *p*. A singularity occurs in our world.

### The Argument

This should raise flags. As mentioned above, we *can* imagine worlds where a Singularity does not occur (e.g., AI progress stalls, policy intervenes, or humanity simply loses interest): that is, ◊¬*p*.

*p* → ◊¬*p*

⇒ *p* → ¬☐¬¬*p*

⇒ *p* → ¬☐*p*

By necessitation:

☐(*p* → ¬☐*p*)

From propositional logic:

☐(*p* → ¬☐*p*) ⇒ ¬☐(*p* → ☐*p*)

But this contradicts (A)

In other words, we don’t deny that the Singularity is possible (◊*p*). But we must also accept that its non-occurrence is possible (◊¬*p*). Thus, even if it occurs, it does so contingently, not necessarily.

### Conclusion (for all readers):
The future is open. Even modal logic agrees.