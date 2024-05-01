const data = [
  {
    id: 1,
    title: "Ad hoc Arbitration",
    content:
      "Ad hoc arbitration means settling disputes outside the traditional court system without relying on a specific institution’s rules. Instead, the parties involved agree on the arbitration process themselves.",
    example:
      "Imagine two business partners disagree about a contract. They decided to use ad hoc arbitration to resolve it. They can customise the arbitration process according to their needs and preferences, like selecting arbitrators and defining procedures. In this case, they might follow the UNCITRAL Arbitration Rules as a guideline to ensure fairness and structure during the arbitration.",
  },
  {
    id: 2,
    title: "Adjudication",
    content:
      "Adjudication is like a middle step in resolving disagreements. During adjudication, a person or group called the adjudicator quickly decides a contract dispute.",
    example:
      "Imagine two companies working on a vast building project in India. They argue about who should pay for a delay in the project. Instead of going straight to court, they choose adjudication. An adjudicator who knows about construction contracts listens to both sides and decides who is right. This decision helps them keep working on the project while they sort out the bigger legal stuff later.",
  },
  {
    id: 3,
    title: "Adjudicator",
    content:
      "An adjudicator is like a judge in formal disputes. They are responsible for listening to both sides of an argument and deciding who is right.",
    example:
      "If two people are arguing about who should win a prize in a competition, the adjudicator is the one who decides which person deserves it based on the rules.",
  },
  {
    id: 4,
    title: "Adversarial Process",
    content:
      "An adversarial process is like a legal contest where two sides, often with the help of lawyers, present their arguments to a neutral judge or decision-maker.",
    example:
      "Imagine two teams in a game. Each team tries to score points by explaining their side of the story to a referee. The referee does not play the game but decides who wins based on what they have heard from both teams.",
  },
  {
    id: 5,
    title: "Advisory Dispute Resolution Process",
    content:
      "The advisory dispute resolution process refers to a situation where a professional, like a legal expert or mediator, looks at a dispute or problem and offers guidance.",
    example:
      "Imagine two neighbours arguing over a property line. They could use expert advice for disputes by consulting with a land surveyor who can explain the property boundaries and help them find a fair solution.",
  },
  {
    id: 6,
    title: "Advisory Mediation",
    content:
      "Advisory mediation is a process where a mediator assesses and evaluates a dispute. They then offer guidance on the facts and laws involved and sometimes suggest potential solutions and how to reach them.",
    example:
      "Imagine two business partners in India disagree with a contract clause. In advisory mediation, a trained mediator would carefully examine the contract, explain the relevant laws, and propose ways to resolve the issue, like renegotiating terms or seeking legal action. This helps the parties make informed decisions about their dispute.",
  },
  {
    id: 7,
    title: "Alternative Dispute Resolution (ADR)",
    content:
      "ADR is like finding a peaceful way to solve problems without going to court. It means using other methods to sort out issues, not legal fights.",
    example:
      "Imagine you have a problem with a neighbour over a noisy party. You talk to them nicely instead of taking them to court to find a solution. That is a bit like ADR. You are trying to resolve the issue without legal battles.",
  },
  {
    id: 8,
    title: "Appraisal",
    content:
      "Appraisal means determining how much something is worth or evaluating its quality.",
    example:
      "When you want to sell a house, you get it appraised to know its value in the market. It is like getting a report card for your property.",
  },
  {
    id: 9,
    title: "Arbitration Agreement",
    content:
      "An arbitration agreement is like a promise in writing between two sides (people or companies) to settle a problem, complaint, or argument using a fair judge called an arbitrator instead of going to a regular court.",
    example:
      "Imagine you buy something online, and it arrives broken. Instead of going to court, you and the online store agree in writing that a neutral person will listen to both sides and make a fair decision on whether you should get a refund. That written promise you both made is an arbitration agreement.",
  },
  {
    id: 10,
    title: "Arbitration Hearing",
    content:
      "An arbitration hearing is like a special meeting where people resolve disagreements outside court. This can happen in two ways:</br><strong>In-Person (Oral) Arbitration Hearing:</strong> Consider this a face-to-face or over-the-phone meeting where an arbitrator listens to people talking, looks at papers, and considers evidence to make a decision.</br><strong>Example:</strong> If two people have a dispute about a business deal, they can have an in-person meeting with an arbitrator who will listen to their arguments and make a fair decision.</br><strong>Arbitration based on Written Submissions:</strong> The arbitrator decides things by only reading documents and evidence, not talking to people directly.",
    example:
      "If there is a disagreement about a contract, both sides can send their evidence and explanations to the arbitrator in writing, and the arbitrator will decide based on what they have sent.",
  },
  {
    id: 11,
    title: "Arbitration Notice",
    content:
      "An arbitration notice is like a formal letter someone writes to start an arbitration process. Imagine it as a way to ask for a fair decision when there is a dispute. It is like saying, 'Hey, we have a problem. Let us get someone neutral to help us solve it.'",
    example:
      "If two people or companies in India have a big argument about a contract, one might send an arbitration notice to the other, saying, 'Let us take this to a third party who can decide what is fair.'",
  },
  {
    id: 12,
    title: "Arbitrator",
    content:
      "An arbitrator is like a referee in a dispute. They usually have legal expertise, such as a retired judge or specialised lawyer, who listens to both sides of a disagreement and makes a fair decision, called an arbitration award. It is a bit like a sports referee making a final call in a game.",
    example:
      "Imagine two people disagree about a business deal. Instead of going to court, they choose an arbitrator. This arbitrator will carefully listen to both sides, review evidence, and then decide that both parties must accept, just like a referee's decision in a game.",
  },
  {
    id: 13,
    title: "Award",
    content:
      "An award is a decision made by an arbitrator that settles the disputes between parties. This decision can be enforced in a public court according to local laws.",
    example:
      "Imagine two people disagree with a business contract. Instead of going to court, they agree to have an arbitrator decide who is right. The arbitrator's decision is called an award; if necessary, it can be enforced by a regular court.",
  },
  {
    id: 14,
    title: "Best Alternative to a Negotiated Agreement (BATNA)",
    content:
      "BATNA stands for Best Alternative to a Negotiated Agreement. It is like your backup plan in negotiations. BATNA is the best thing you can do if you cannot reach an agreement with the other party. Knowing your BATNA helps you make decisions during negotiations.",
    example:
      "Imagine buying a used car, and the seller will not lower the price to what you want. Your BATNA might be looking for a similar car from a different seller or a better deal. Knowing your BATNA helps you decide whether to keep negotiating or walk away.",
  },
  {
    id: 15,
    title: "Bifurcation",
    content:
      "Bifurcation means splitting or dividing a legal process into two or more parts. It is like breaking a complex legal case into smaller, manageable pieces. This is done to save time and money.",
    example:
      "Imagine you have a significant legal case. Instead of dealing with all the issues simultaneously, you might split it into two parts. First, you discuss the basic facts and then decide who has the authority (jurisdiction) to handle the case. After that, you move on to the case's main issues (merits). This helps in a quicker and cost-effective resolution.",
  },
  {
    id: 16,
    title:
      "Bracketed Arbitration (Bounded Arbitration or High-Low Arbitration)",
    content:
      "This type of arbitration where both parties in a dispute set limits on the possible outcomes for damage awards. It is like setting boundaries for the best and worst-case scenarios. Here is how it works:</br><strong>(a)</strong>The plaintiff (the person who sues) agrees to accept no less than a certain amount.</br><strong>(a)</strong>The defendant (the person being sued) agrees to pay no more than a certain amount.</br><strong>(a)</strong>If the arbitrator’s decision falls within these agreed-upon limits, that decision is final and binding. However, if the arbitrator’s decision goes beyond these limits:</br><strong>(i)</strong>&emsp;If the decision exceeds the agreed-upon maximum (ceiling), the damages awarded are limited to that maximum.</br><strong>(ii)</strong>&emsp;If the decision is lower than the agreed-upon minimum (floor), the damages are increased to meet the minimum.",
    example:
      "Let us say a plaintiff sues for an injury, and they agree to accept at least ₹50,000 but not more than ₹1,00,000. The defendant agrees not to pay more than ₹1,00,000. If the arbitrator decides on ₹70,000, that amount stands. However, if the arbitrator decides on ₹1,20,000, the plaintiff would receive ₹100,000 (the agreed maximum). This approach helps both parties manage risk and uncertainty in arbitration proceedings.",
  },
  {
    id: 17,
    title: "Bona Fide",
    content:
      "Bona fide means acting in good faith or with sincere intentions. It is like doing something honestly and genuinely without hidden motives or deceit.",
    example:
      "If you buy a product from a seller who claims it is brand new and believes it is new, they are selling it bona fide. They are not trying to trick you into buying something used or defective.",
  },
  {
    id: 18,
    title: "Case Appraisal",
    content:
      "Case appraisal is a process where a person, often a specialist in dispute resolution, looks into a disagreement and offers guidance on what could be done to resolve it in a way that works for all parties involved. Sometimes, an impartial expert from outside may also give their opinion to help find a fair solution.",
    example:
      "Imagine two neighbours arguing over a property boundary. A dispute resolution expert examines the situation and suggests options like mediation or a clear survey to solve the issue. This helps both neighbours understand their choices for resolving the problem somewhat.",
  },
  {
    id: 19,
    title: "Caucus (Private Meeting)",
    content:
      "A caucus, or a private meeting, is like a secret talk between the mediator (the person helping to solve a problem) and just one of the groups involved in the dispute. In this meeting, they discuss ways to fix the problem without everyone else knowing. It is like huddling during a sports game to make a game plan without the other team hearing.",
    example:
      "Imagine two friends are arguing about what game to play. They might have a caucus, where one friend talks privately with a parent to figure out a fair solution, like taking turns playing different games.",
  },
  {
    id: 20,
    title: "Claim",
    content:
      "A claim is like making a formal request when you believe something is wrong or unfair. It is when one person (or party) says, “I think I should get something because of a problem or dispute.” This can be the first request, a response to someone else’s request, or even when different sides in a disagreement ask for something.",
    example:
      "Imagine you ordered a product online, but it arrived damaged. You could claim a refund by asking the seller to return your money. If the seller says the damage was your fault, they might make a counter-claim by saying it is not their responsibility. This is like a back-and-forth of claims and counter-claims in a dispute.",
  },
  {
    id: 21,
    title: "Claimant",
    content:
      "A claimant starts an arbitration or mediation process and makes a formal complaint or request for resolution.",
    example:
      "In a dispute over a damaged product, the claimant is the person who files a complaint and initiates the arbitration or mediation. They are the ones seeking a resolution to the issue.",
  },
  {
    id: 22,
    title: "Co-mediation",
    content:
      "Co-mediation is a collaborative approach where two or more mediators help resolve complex disputes, especially involving multiple parties. It is like having multiple experts working together to find solutions.",
    example:
      "Think of it as a team of doctors working together to diagnose and treat a patient, ensuring a more comprehensive and effective outcome. Co-mediators can bring diverse skills and perspectives to help parties reach mutually beneficial agreements in mediation.",
  },
  {
    id: 23,
    title: "Community Mediation",
    content:
      "This is like solving problems in your neighbourhood or local area with the help of volunteers. It is used when there is no official way to solve a problem or when the official way is too expensive or hard to reach.",
    example:
      "Imagine two neighbours who constantly argue about a noisy dog. Instead of going to the police or court, they could use community mediation to talk it out with the help of volunteers from the neighbourhood.",
  },
  {
    id: 24,
    title: "Complaint",
    content:
      "A complaint is when you express that you are not happy with something. People usually complain about a company’s staff, service, employees, or how they dealt with the complaint, expecting some response or fix.",
    example:
      "Suppose you order food from a restaurant, but it arrives cold. If you call the restaurant to tell them and hope they will send you hot food or refund your money, that is making a complaint.",
  },
  {
    id: 25,
    title: "Conciliation",
    content:
      "Conciliation is like having a friend who helps you and someone you have a problem with to find a solution without telling you what to do. It is a way to peacefully settle disagreements, where a person called the “conciliator” helps, but their ideas are not final decisions.",
    example:
      "Imagine two friends arguing about which game to play. Another friend suggests a game both will enjoy, but they do not force it on them. They help find a compromise, which is similar to what conciliation does to solve more significant disputes.",
  },
  {
    id: 26,
    title: "Conference",
    content:
      "A meeting or discussion where people, their representatives, or others come together to discuss disagreements. These discussions can have different purposes and involve various ways of helping resolve the issues.",
    example:
      "Imagine a group of people discussing a disagreement, like neighbours discussing a property boundary. They might have a meeting to talk it out and find a solution. This is a form of conferencing or a discussion.",
  },
  {
    id: 27,
    title: "Confidential Listener",
    content:
      "A confidential listener is a neutral third party who helps settle disputes between two parties, such as in a legal or negotiation context. It is a method often used to facilitate fair and confidential negotiations. Here is how it works: </br><strong>(a)Submission of Positions:</strong> The involved parties share their confidential settlement offers or positions with the confidential listener. </br><strong>(b)No Sharing of Offers:</strong> Importantly, the confidential listener does not disclose one party’s offer to the other party. They keep this information private. </br><strong>(c)Determining Negotiability:</strong> The confidential listener evaluates whether the positions from both parties are within a negotiable range. In other words, are the offers close enough to reach a compromise? </br><strong>(d)Settlement Options:</strong> Depending on the evaluation:  </br>&emsp;(i)Suppose both parties have offers that overlap, and the plaintiff’s offer is lower. In that case, they may agree to settle at a middle point between their offers. </br>&emsp;(ii)Suppose the offers are within a specified range (e.g., 10 per cent). In that case, the confidential listener can inform and guide the parties to negotiate and narrow the gap. </br>&emsp;(iii)If the offers are far apart and not within the specified range, the process can be repeated, or alternative negotiation strategies can be explored. This process helps parties reach settlements while maintaining the confidentiality of their offers.",
    example:
      "Imagine two business partners are in a dispute over the sale of a company. They hire a confidential listener who reviews their confidential offers. If the offers are close enough, the confidential listener helps them find a compromise. If not, they may return to the negotiation table with guidance from the confidential listener.",
  },
  {
    id: 28,
    title: "Conflict Coaching",
    content:
      "Conflict coaching is a process that involves teaching individuals how to handle and resolve conflicts effectively. It typically occurs in one-on-one sessions, where a neutral third party (the conflict coach) helps someone navigate a conflict they are experiencing with another person. The goal is to empower the individual to manage the conflict constructively.",
    example:
      "Imagine you are disagreeing with a coworker that’s causing tension. A conflict coach would meet with you privately, listen to your side of the story, offer advice on handling the situation calmly and help you prepare for a productive conversation with your coworker to resolve the issue.",
  },
  {
    id: 29,
    title: "Consolidation",
    content:
      "Consolidation simplifies the process by combining multiple ongoing arbitration cases into one. However, it only happens when the cases and parties are pretty similar. It is like combining all your puzzle pieces to solve one big puzzle instead of many small ones.",
  },
  {
    id: 30,
    title: "Consumer",
    content:
      "A person who buys or uses products or services for their needs, family, or home.",
    example:
      "When you go to a store and buy groceries for your family, you act as a consumer because you purchase products for personal or household use.",
  },
  {
    id: 31,
    title: "Consensus Building (Census Process)",
    content:
      "This method is used in conflict resolution and decision-making, especially when many people or groups are involved. It is like bringing everyone to discuss and agree on something important.",
    example:
      "Imagine a town where people are disagreeing about a new park. Some want it in one place, and others want it elsewhere. Consensus building would involve getting all these people together, listening to their ideas, and finding a solution everyone can accept.",
  },
  {
    id: 32,
    title: "Convening",
    content:
      "Convening is when a neutral person brings together people who disagree to determine if they can talk it out. This person helps them understand how to solve the problem and sets some basic rules for their discussion.",
    example:
      "Imagine two neighbours arguing over a noisy construction project. A neutral mediator (the convener) explains how they can resolve the issue by talking calmly. They also set rules like taking turns to speak.",
  },
  {
    id: 33,
    title: "Cooperative Problem-Solving",
    content:
      "People work together to solve a problem or disagreement without involving a third party. It happens when the involved parties agree to solve a common issue. Instead of competing, they choose to collaborate.",
    example:
      "Imagine two neighbours who are arguing about a property boundary. They decide to sit down and talk it out, aiming to find a solution that benefits both without going to court. This approach is often used when the problem is not highly heated, and it is an integral part of labour-management cooperation programs, like when workers and their bosses work together to improve workplace conditions.",
  },
  {
    id: 34,
    title: "Deposition",
    content:
      "A deposition is like a formal statement given by a person, often a witness, who promises to tell the truth. This statement is usually written down or recorded and can be used later in legal situations.",
    example:
      "Imagine a court case where someone saw a car accident. They might be asked to give a deposition, which means they would have to sit down and talk about what they saw while promising to be honest. This talk is written down and can be used as evidence if the case goes to court.",
  },
  {
    id: 35,
    title: "Desk Arbitration",
    content:
      "Desk arbitration, also known as arbitration on the papers, is a process where both parties in a dispute submit their arguments and evidence in written form. Instead of a traditional in-person hearing, a decision is reached by the arbitrator solely based on these written submissions.",
    example:
      "Imagine two parties in a contract dispute: Company A and Company B. In desk arbitration, they would each send their arguments, documents, and supporting evidence to the arbitrator without attending a physical hearing. The arbitrator would then carefully review these written materials to decide rather than conducting face-to-face proceedings. This process can be more cost-effective and convenient, primarily when the parties are located far apart or during situations like the COVID-19 pandemic when in-person meetings are restricted.",
  },
  {
    id: 36,
    title: "Disclosures",
    content:
      "Disclosures mean the information that a person must share to be transparent about any connections or experiences that could make them seem unfair.",
    example:
      "Imagine you and your friend disagree and ask another friend to help settle it. If that friend knows one of you much better, they should tell you about this so you know they will try to be fair to both sides.",
  },
  {
    id: 37,
    title: "Discovery",
    content:
      "Discovery in legal terms means sharing important information or documents with the other party during a legal case. It is like showing your cards in a card game so both sides can prepare and strengthen their case.",
  },
  {
    id: 38,
    title: "Discovery Referee",
    content:
      "A discovery referee is like a mediator in legal cases, especially when things get complicated.",
    example:
      "Suppose there is a complex lawsuit, and the two parties cannot agree on what information they should share (discovery) with each other. They hire a discovery referee instead of going to court whenever they argue about it.",
  },
  {
    id: 39,
    title: "Dispute Panels",
    content:
      "Dispute panels are like friendly referees. They are neutral people who help when there is a fight or confusion.",
    example:
      "Imagine two friends have a big argument about sharing toys. They are upset and cannot agree. Instead of going to a teacher or parent, they ask a friendly neighbour to help. This neighbour listens to both sides, tells them how to share fairly, and they become friends again.",
  },
  {
    id: 40,
    title: "Dispute Resolution",
    content:
      "This means finding ways to solve disagreements. It includes methods to prevent arguments or help people settle their disagreements with or without going to court. Dispute resolution can involve discussing things, getting advice, or even having someone decide for you.",
    example:
      "Two people disagree about who owns a piece of land. Instead of going to court right away, they might try dispute resolution. They could talk to a mediator (someone who helps them find a solution), get advice from an expert, or have someone decide who owns the land. This helps them avoid a long and expensive court process.",
  },
  {
    id: 41,
    title: "Dispute Review Board (DRB)",
    content:
      "A Dispute Review Board, or DRB, is like a group of experienced problem solvers hired to resolve arguments that can come up during construction projects. This group typically has one or three experts in settling disagreements, and they are chosen by contract. They listen to the concerns of the owner, contractor, or anyone else involved in the project and help find fair solutions.",
    example:
      "Imagine you are building an extensive apartment complex in India. During the construction, the contractor and the owner started disagreeing about the cost of materials. They cannot agree on who should pay for the extra expenses. Instead of going to court, they have a Dispute Review Board. This board consists of experts who come in, hear both sides of the argument, and decide who should cover the extra costs. This helps keep the construction project on track without wasting time and money in a legal battle.",
  },
  {
    id: 42,
    title: "Document",
    content:
      "A document is any piece of writing or data that contains essential information, like facts, opinions, statements, or descriptions. It can take various forms, such as agreements, records, letters, emails, etc. Documents are essentially records of information that can be in written or digital form, and they serve as evidence or records of various activities and transactions.",
    example:
      "</br><strong>(a)</strong>A rental agreement you sign when you move into a new apartment is a document.</br><strong>(b)</strong>Your medical history report from a doctor’s visit is also a document.</br><strong>(c)</strong>An email from your boss with work instructions is considered a document, too.",
  },
  {
    id: 43,
    title: "Early Neutral Evaluation",
    content:
      "Early neutral evaluation is a private and early step in the legal process before a formal trial, saving time and resources. In this process, both parties choose a neutral expert with relevant experience. This expert listens to each side’s arguments and evidence and then assesses the case’s strengths and weaknesses. The goal is to help the parties find common ground and resolve their dispute without going through a full trial.",
    example:
      "Imagine two people in India disagree with a business contract. Instead of going straight to court, they opt for early neutral evaluation. They both agree on an experienced mediator who listens to their sides and helps them understand the strengths and weaknesses of their arguments. This process can lead to a quicker and more cost-effective resolution of their dispute.",
  },
  {
    id: 44,
    title: "Emergency Arbitration",
    content:
      "Emergency Arbitration is like a fast-track solution in legal disputes. Imagine two parties in a business disagreement wanting quick action before a complete legal process. Emergency arbitration steps in. It lets them ask for temporary solutions before a proper legal case. This can be super useful when waiting for a full trial would cause harm or damage.",
    example:
      "Two companies have a contract, and one thinks the other is breaking the rules, causing them losses. Instead of waiting for a lengthy court case, they use emergency arbitration to get a quick decision on what should happen right away, like stopping the harm or protecting their interests.",
  },
  {
    id: 45,
    title: "Evaluative Mediation",
    content:
      "Evaluative mediation is an approach where the mediator relies on their experience and expertise in a particular field to predict potential outcomes of a dispute.",
    example:
      "Imagine a mediation session between two parties in a business contract dispute. An evaluative mediator with a background in contract law might provide insights into how a court could potentially interpret the contract terms. This expertise helps the parties make more informed decisions during the mediation process.",
  },
  {
    id: 46,
    title: "Facilitative Mediation",
    content:
      "Facilitative mediation is a way to solve problems where the people involved have the most control. A mediator helps them talk better and find solutions by sharing all the essential information and understanding each other’s needs and concerns.",
    example:
      "Imagine two neighbours arguing over a noisy construction project. A facilitative mediator would help them talk openly about their concerns, share information about the project, and find a solution that works for both without making decisions for them.",
  },
  {
    id: 47,
    title: "Fact Finding",
    content:
      "This is like being a detective in a mystery story. Discovering important information or facts can help resolve a disagreement or problem.",
    example:
      "Imagine two friends arguing about who borrowed a book last. They ask other friends who might know the truth to discover what happened. This is their fact-finding mission to solve the dispute.",
  },
  {
    id: 48,
    title: "Fast-track Arbitration (Expedited Arbitration)",
    content:
      "Fast-track arbitration, also known as expedited arbitration, refers to a dispute resolution process where disagreements are resolved quickly, following specific time constraints agreed upon by the involved parties. This approach is designed to speed up the arbitration process, reducing the time it takes from the start of the proceedings to the final decision.",
    example:
      "Let us say two companies have a contract dispute. They both agree to use fast-track arbitration to resolve it. As a result, they commit to adhering to strict timelines for submitting evidence, making arguments, and reaching a resolution. This helps them avoid long, drawn-out legal battles and reach a decision more swiftly, which can be particularly beneficial in commercial disputes.",
  },
  {
    id: 49,
    title: "Focus Group",
    content:
      "A focus group is a less formal meeting where lawyers share parts of their case with jurors. It is like a brainstorming session where jurors give feedback to trial lawyers about evidence or arguments in real-time.",
    example:
      "Imagine a group of potential jurors sitting together with lawyers. The lawyers show them evidence and arguments they plan to use in a trial. Jurors then discuss their thoughts and reactions, helping lawyers refine their case strategy.",
  },
  {
    id: 50,
    title: "Final Offer Arbitration (Baseball Arbitration)",
    content:
      "Final Offer Arbitration, also known as Baseball Arbitration, is a unique way of settling disputes. This method got its name from its historical use in resolving disputes between baseball players and teams. It is like a game where the arbitrator decides which side’s offer gets the final “score.” Here is how it works: </br><strong>(a)</strong>Both parties, the one making a claim (plaintiff) and the one defending against it (defendant), independently propose their “final offers” to an arbitrator. </br><strong>(b)</strong>The arbitrator must choose the plaintiff’s or the defendant’s offer without any modifications. </br><strong>(c)</strong>The decision is based on the arguments presented by both sides.",
    example: "",
  },
  {
    id: 51,
    title: "Hybrid Processes",
    content:
      "Hybrid processes in dispute resolution combine different methods to customize solutions for specific conflicts. This flexible approach adapts to all parties’ unique needs and interests.",
    example:
      "Imagine two people disagree about a business deal. Instead of just using mediation or arbitration, they might choose a hybrid process that involves both. They could start by discussing their issues (mediation) and, if they cannot agree, have an arbitrator make a final decision. This combines the best of both methods to resolve their conflict effectively.",
  },
  {
    id: 52,
    title: "Incentive Arbitration",
    content:
      "In this type of arbitration, when parties cannot agree, they set a penalty for anyone who rejects the arbitrator’s decision, goes to court, and does not do better by a specific percentage or formula. Penalties can involve paying the legal fees of the other party.",
    example:
      "Let us say two companies have a contract dispute, and they choose incentive arbitration. If one company rejects the arbitrator’s decision and goes to court but does not improve its position by at least 10%, it would have to pay the legal fees of the other company. This encourages both parties to accept the arbitrator’s decision and avoid costly litigation.",
  },
  {
    id: 53,
    title: "Indirect (Third-Party) Negotiation",
    content:
      "When two parties disagree, they can choose someone else, like a lawyer or agent, to help them sort things out instead of talking directly. These representatives act on behalf of the main parties and might have the power to make agreements. Sometimes, a mediator can assist in the process, but they do not decide right or wrong – they help everyone talk it out.",
    example:
      "Imagine two friends who cannot agree on which movie to watch. Instead of arguing directly, they each ask their siblings for help. The siblings suggest options and help them agree on a movie without the friends having to argue.",
  },
  {
    id: 54,
    title: "Inquisitorial Process (Investigative Process)",
    content:
      "In an inquisitorial process, the person in charge can conduct their research, seek expert advice, invite witnesses, and actively ask questions to those witnesses. This approach is like a detective’s method of investigation. Instead of just listening to what others say, the decision-maker actively investigates and gathers information to make a fair decision.",
    example:
      "Imagine a detective trying to solve a mystery. They gather evidence, talk to experts, interview witnesses, and ask them many questions to discover what happened.",
  },
  {
    id: 55,
    title: "Interest-Based Problem-Solving",
    content:
      "Interest-based problem-solving is finding solutions that work well while strengthening relationships between the involved parties. It involves: </br><strong>Separating People from Problems:</strong> Focusing on the issue, not blaming or attacking individuals involved. </br><strong>Exploring All Interests:</strong> Understanding the underlying concerns and needs of everyone involved to clarify the problem. </br><strong>Brainstorming Solutions:</strong> Generating various ideas and possibilities to address the problem. </br><strong>Using Mutual Standards:</strong> Agreeing on a fair and reasonable basis for reaching a solution.",
    example:
      "In a workplace, if employees and management dispute working conditions, they could use interest-based problem-solving to understand each other’s concerns better, brainstorm solutions, and reach an agreement that benefits everyone.",
  },
  {
    id: 56,
    title: "Interim Order",
    content:
      "An interim order is like a temporary decision made by someone in authority, which does not last forever. It is like getting a Band-Aid before seeing the doctor for a more permanent fix.",
    example:
      "If you have a dispute with your neighbour about a tree on your property, a court might give you an interim order to stop your neighbour from cutting it down until they make a final decision.",
  },
  {
    id: 57,
    title: "Interrogatory",
    content:
      "An interrogatory is like a formal written question asked to a witness during a legal process, and the witness has to answer it while promising to tell the truth.",
    example:
      "Imagine a court case where someone is accused of causing a car accident. The lawyer for the person who got hurt might send an interrogatory to a witness, asking, 'Did you see the accident happen?' The witness would have to answer this question honestly while swearing to tell the truth, just like when you promise not to lie.",
  },
  {
    id: 58,
    title: "Investigation",
    content:
      "In this process, a dispute resolution expert, the investigator, looks into a disagreement and offers guidance regarding the facts involved. However, they do not decide on the dispute’s outcome.",
    example:
      "If two people disagree on a property boundary, an investigator might examine land records, talk to both parties and then advise them on the evidence and facts related to the dispute. It is like detective work to uncover information, but the final decision is left to the parties or another authority.",
  },
  {
    id: 59,
    title: "Lex Arbitri",
    content:
      "Lex arbitri is a legal term that means the laws of where an arbitration occurs. It is like the rulebook that guides how the arbitration process works.",
    example:
      "Imagine two companies in India disagree about a business deal. Instead of going to court, they decided to have an arbitration in Mumbai. In this case, the lex arbitri would be the laws and rules of India that apply to the arbitration process in Mumbai. These laws determine how the arbitration is conducted and what rules both parties must follow during the proceedings.",
  },
  {
    id: 60,
    title: "Med-Arb",
    content:
      "Med-Arb is like having two steps to resolve a dispute: </br><strong>(a)</strong>Mediation is like talking it out with a neutral person to find a solution. It is like having a friend help you both agree on something. </br><strong>(b)</strong>Arbitration happens if talking does not work, and you go to this step. It is like asking a judge to decide; whatever they say is final.",
    example:
      "Imagine you have a problem with your neighbour over a loud party. First, you try to talk calmly with a mediator. If that does not work, you agree to let an arbitrator decide if the party should stop.",
  },
  {
    id: 61,
    title: "Mediation",
    content:
      "Mediation is like a friendly conversation to resolve a disagreement, but it is not like a judge’s decision that you must follow. It is a way for people to talk and find solutions together.",
    example:
      "Imagine two friends who cannot agree on which game to play. They talk to a neutral person (like an older sibling) who helps them figure out a game they both like. If they both agree, great! If not, they can still choose a different game without strict rules.",
  },
  {
    id: 62,
    title: "Mediator",
    content:
      "A mediator is like a peacemaker. They are a person, often someone experienced in law like a retired judge or specialised lawyer, who helps settle disputes between two or more parties. Think of them as a referee in a game. They do not pick sides; instead, they listen to everyone’s concerns and guide them toward finding a solution that everyone can agree on.",
    example:
      "Imagine two people, Ramesh and Suresh, are arguing over a piece of land in your neighbourhood. Instead of going to court, they hired a mediator named Mr. Patel. Mr. Patel listens to Ramesh and Suresh, understands their wants, and helps them develop a fair agreement. Thanks to Mr. Patel, they avoided a lengthy legal battle and found a peaceful solution.",
  },
  {
    id: 63,
    title: "Mediation Agreement",
    content:
      "A mediation agreement is a formal promise between people in a disagreement. This agreement says that they will try to solve their problem by talking with the help of a mediator. However, whatever the mediator suggests, they do not have to do it if they do not want to.",
    example:
      "Let us say two friends have a big argument about sharing a toy. Their parents might make them sign a mediation agreement. This means they will talk it out with a grown-up’s help, but they can still say no to the ideas the grown-up comes up with to fix the problem.",
  },
  {
    id: 64,
    title: "Mediation Conference",
    content:
      "A mediation conference is like a meeting where people try to resolve a problem without going to court. Here is how it works:</br><strong>Talk about the problem:</strong> Each side can explain their story to a mediator. This person is like a referee, not a judge. </br><strong>Private chats:</strong> The mediator talks to each side separately to understand their issues better. </br><strong>Settlement talk:</strong> The mediator then helps both sides find a fair solution. They suggest possible solutions to end the argument. </br><strong>Meeting or phone:</strong> This talk can happen in person or on the phone, depending on what works best for everyone.",
    example: "",
  },
  {
    id: 65,
    title: "Mediation Notice",
    content:
      "A mediation notice is a written document that the person making a claim (the claimant) sends to the other party involved (the respondent) to start resolving their dispute through mediation. It has also sometimes been called a request for mediation.",
    example:
      "If you have a disagreement with someone and want to try resolving it through mediation, you would send them a mediation notice to ask them to participate in the mediation process officially.",
  },
  {
    id: 66,
    title: "Mini-trial",
    content:
      "A mini-trial is a formal mediation process where both parties involved in a dispute relinquish some control over procedures. They aim to shift the conflict from a legal context to a business problem. It involves non-legal representatives and a neutral mediator working together to find a resolution.",
    example:
      "Imagine two companies in India are in a contract dispute over a delayed project. Instead of going to court, they opt for a mini-trial. Each company selects a representative with decision-making power. These representatives and a neutral mediator work together to find a solution more focused on the practical business aspects of the problem rather than purely legal matters.",
  },
  {
    id: 67,
    title: "Multi-Tiered Dispute Resolution Clause (MDR Clause)",
    content:
      "A multi-tiered dispute resolution clause (MDR clause) is like a step-by-step problem-solving plan. Imagine it as a ladder with different levels: </br><strong>(a) Notification:</strong> When there is a problem, the first step is to let the other party know about it, like sending them a message or email. </br><strong>(b) Consensual Resolution: </strong> If the problem is not fixed by talking about it, the next step is working together to find a solution. This might involve meetings or negotiations.</br><strong>(c) Arbitration or Litigation: </strong> If the first two steps do not work, it is like going to a higher authority for help. This can be arbitration (where an impartial person decides the solution) or litigation (going to court).",
    example: "",
  },
  {
    id: 68,
    title: "Narrative Mediation",
    content:
      "Narrative mediation is like a storytelling approach to resolving conflicts. In this process, people in conflict share their stories, and a mediator helps find common ground between them. This can create new trust-building stories that encourage cooperation. This approach promotes trust and cooperation.",
    example:
      "Imagine two neighbours who have a dispute over a shared fence. Instead of arguing about who is right, a narrative mediator would ask each neighbour to explain their perspective and feelings. By understanding both sides better, the mediator helps them create a new story where they can agree on a solution, like sharing the cost of repairing the fence together.",
  },
  {
    id: 69,
    title: "Neutral",
    content:
      "A neutral is like a referee in a sports match. They are individuals who help in resolving disputes or conflicts using methods like mediation or arbitration. They are like peacemakers who do not take sides but guide others to find fair solutions.",
    example:
      "Consider a neutral umpire in a cricket match, ensuring a fair game without favouring any team.",
  },
  {
    id: 70,
    title: "Neutral Evaluation",
    content:
      "In this process, both sides in a dispute explain their case to a neutral expert, an evaluator. This evaluator, who typically has expertise in the subject matter or legal matters relevant to the dispute, assesses the strengths and weaknesses of each party’s evidence and arguments. After this evaluation, the evaluator offers their non-binding opinion and suggests potential ways to resolve the conflict. While the evaluator’s opinion is not legally binding, it is a valuable tool to help the parties negotiate and find a resolution.",
    example:
      "Imagine two businesses in India disagree with a contract. They both present their sides of the story to a neutral evaluator specialising in contract law. The evaluator carefully analyses the contract terms, listens to both parties and then gives their expert opinion on who has a stronger case and how they might reach a fair settlement. This opinion helps the businesses negotiate and potentially avoid going to court.",
  },
  {
    id: 71,
    title: "Neutral Expert Fact-Finding",
    content:
      "Neutral expert fact-finding means when both sides in a dispute hire an impartial expert to give their professional opinion on complex technical, scientific, or legal issues. Depending on the agreement, this opinion can be either the final say or just advisory.",
    example:
      "Imagine two companies are arguing about who is responsible for pollution in a river. Instead of going to court, they hire a neutral scientist who examines the evidence and provides a fair judgement on what is causing the pollution. The companies then decide whether to follow that judgement or not.",
  },
  {
    id: 72,
    title: "Non-Binding Arbitration",
    content:
      "Non-binding arbitration is a process similar to binding arbitration but with a critical difference. In non-binding arbitration, the decision made by the neutral third party is not final or mandatory. Instead, it serves as guidance or advice. Parties involved in a dispute can use this advisory decision to help them settle the dispute through negotiation or other methods. However, they are not legally bound to follow it.",
    example:
      "Imagine two business partners in India disagree about the terms of a contract. They go through non-binding arbitration to get an impartial opinion on the matter. The arbitrator provides an advisory decision, but the partners are not obligated to accept it. They may use the decision as a starting point for further discussions or choose a different resolution method if they cannot agree.",
  },
  {
    id: 73,
    title: "Online Dispute Resolution (ODR)",
    content:
      "ODR stands for Online Dispute Resolution. It is like solving disagreements or conflicts using the internet. ODR uses digital tools and platforms to settle disputes or negotiate agreements without needing to meet in person.",
    example:
      "If you buy something online and it is not what you expected, you might use an ODR platform provided by the website to resolve the issue. You can contact the seller online to find a solution without going to a physical store or court.",
  },
  {
    id: 74,
    title: "Ombudsperson",
    content:
      "An ombudsperson is like a friendly problem-solver. They use various methods, such as talking, mediating, and investigating, to help people settle disagreements. When someone has a complaint, the ombudsperson talks to everyone involved, looks at the facts, and suggests solutions. They do not force decisions on anyone; they are good at convincing people to agree on solutions. If someone does not like the ombudsperson’s idea, they can still seek help from other places. Ombudspersons can deal with issues at work, like employee arguments, or issues outside of work, like customer complaints. They are also good at finding patterns in problems and suggesting ways to fix them.",
    example:
      "Imagine you have a problem with a coworker and do not know how to solve it. You can talk to the ombudsperson at your workplace, and they will help you and your coworker find a solution that works for both of you.",
  },
  {
    id: 75,
    title: "Order",
    content:
      "An order is like a decision or rule made by an arbitrator to set clear rules and responsibilities for everyone involved.",
    example:
      "Imagine two people have a disagreement, and they bring in an arbitrator to help. The arbitrator listens to both sides and then makes an order. This order could say who has to do what or who gets what in the end, just like a referee making rules in a game.",
  },
  {
    id: 76,
    title: "Panellist",
    content:
      "A panellist is part of a group responsible for resolving disputes in arbitration. In arbitration, disputes can be settled by a single unbiased arbitrator or a team of three arbitrators, known as a tribunal. When an arbitration clause specifies a panel, each party chooses one arbitrator for the panel. These appointed arbitrators can act as neutral decision-makers or advocates for their respective parties. To prevent conflicts and ensure fairness, the two arbitrators selected by the parties will then choose an additional arbitrator to serve as the tribunal’s chairman, helping to avoid situations where no decision can be reached. This process ensures a balanced and impartial resolution of disputes.",
    example:
      "In a legal dispute, a lawyer is your representative if you have a lawyer presenting your case in mediation. They will communicate your interests, arguments, and concerns during mediation to help resolve the dispute.",
  },
  {
    id: 77,
    title: "Party",
    content:
      "Anyone involved in a legal claim, whether making a claim (claimant) or defending against one (respondent).",
    example:
      "In a court case, the party making the accusation (claimant) accuses the party being accused (respondent) of wrongdoing. Both are parties in the legal process.",
  },
  {
    id: 78,
    title: "Plenary Session",
    content:
      "A plenary session is when everyone involved in a meeting or discussion comes together to share their thoughts to find a solution. It usually starts with each person or group listening to what others say.",
    example:
      "Imagine a conference about a community issue in India. In a plenary session, representatives from different groups, like local government officials, community leaders, and residents, gather to discuss and exchange ideas on how to solve the problem. Each participant listens to the others to work towards a standard solution.",
  },
  {
    id: 79,
    title: "Pre-Dispute ADR Contract Clause",
    content:
      "This part of your agreement discusses how you will solve problems if they arise. It can say you will use different ways to work things out, like talking with a middle person called an arbitrator or mediator.",
    example:
      "Imagine you and a company agree to do business. Your contract has a pre-dispute ADR clause that says if you have a big argument, you will use a mediator named Mr. Smith to help you find a solution. It is like having a referee to make things fair.",
  },
  {
    id: 80,
    title: "Private Trial",
    content:
      "A private trial is like a regular court trial held by a retired judge. Like a regular trial, the decision can be challenged if there are legal mistakes or the evidence does not support it.",
    example:
      "Imagine a retired judge presiding over a private trial for a dispute between two parties. If the judge makes a legal error or if the verdict does not seem fair based on the evidence, the people involved can appeal the decision to get it reviewed.",
  },
  {
    id: 81,
    title: "Reasoned Decision",
    content:
      "A reasoned decision is like a thoughtful verdict. It is not just the final decision but also includes a written explanation of the facts and the legal reasons behind that decision. It is like when a judge not only says 'guilty' or 'not guilty' but also explains why.",
    example:
      "In a court case, the reasoned decision might state, 'The defendant is guilty of theft because there is strong evidence, including security camera footage, showing them taking the item without permission.' This helps people understand why the decision was made.",
  },
  {
    id: 82,
    title: "Receivership",
    content:
      "This is when someone is appointed to take care of and manage assets or property that belongs to others. This can happen for various reasons, like when there is a legal dispute when a business is closing down, or when assets need to be sold.",
    example:
      "Imagine if you lend your car to a friend, but they cannot care for it properly. You might ask someone else, a receiver, to look after your car until things are sorted out.",
  },
  {
    id: 83,
    title: "Reconciliation",
    content:
      "Reconciliation is a process where people who disagree try to resolve their issues and make amends to rebuild their relationship. This is especially useful when the people involved will continue interacting with each other, like in family arguments or workplace conflicts. A mediator or counsellor might help in this process.",
    example:
      "Imagine two friends who had a big argument. Instead of staying mad at each other, they decide to talk and resolve their differences to continue being friends.",
  },
  {
    id: 84,
    title: "Reply",
    content:
      "A reply is a formal written response from the person or party who receives an arbitration notice (the respondent). This response is provided after the claimant initiates arbitration proceedings by filing a notice of their claim. Reply is crucial in arbitration because it allows both parties to present their cases and helps the arbitrator or arbitration panel understand the full scope of the dispute before making a decision.",
    example:
      "Imagine you have a dispute with a business partner, and they start the arbitration process by sending you a notice outlining their complaint. In this situation, your written reply would allow you to address their claims, present your side of the story, and provide any relevant evidence or arguments.",
  },
  {
    id: 85,
    title: "Representative",
    content:
      "A representative is someone who speaks or acts on behalf of another person or a group. In arbitration or mediation, a representative is a person, lawyer, or any individual who stands for and supports one of the parties involved.",
    example:
      "In a legal dispute, a lawyer is your representative if you have a lawyer presenting your case in mediation. They will communicate your interests, arguments, and concerns during mediation to help resolve the dispute.",
  },
  {
    id: 86,
    title: "Respondent",
    content:
      "A respondent has a claim made against them in a legal or formal context. They are the person or party that needs to answer to the claims made by another.",
    example:
      "In a court case, the respondent is sued if one person sues another for a debt. They must respond to the lawsuit and defend themselves in court.",
  },
  {
    id: 87,
    title: "Sanctions",
    content:
      "Sanctions in the context of legal proceedings refer to penalties or punishments imposed by an arbitrator in response to specific actions or behaviours during the arbitration process. These penalties can include:</br><strong>(a) Dismissal of the Claim or Counter-Claim:</strong> A party’s legal case may be rejected or thrown out by the arbitrator. </br><strong>(b) Preclusion of Evidence:</strong> It involves preventing specific evidence from being used in the case. This could weaken a party’s position. </br><strong>(c) Admission of Facts:</strong> The arbitrator might compel a party to accept specific facts as accurate, which can work against their interests. </br><strong>(d) Payment of Fees, Costs, or Attorney’s Fees:</strong> A party may be required to cover the costs of the arbitration process, including the fees of their legal representation. </br><strong>(e) Granting of an Award:</strong> This is the decision or judgement made by the arbitrator regarding the dispute. It may involve compensation or other remedies. </br><strong>(f) Imposing Sanctions Against a Party or Representative:</strong> These penalties can apply to either the party involved in the dispute or their legal representatives.",
    example:
      "If one party intentionally withholds significant evidence or acts that disrupt the arbitration process, the arbitrator might impose sanctions such as dismissing their claim, making them pay the other party’s legal fees, or excluding specific evidence they were planning to use in their favour.",
  },
  {
    id: 88,
    title: "Settlement Conference",
    content:
      "A settlement conference is like a meeting to solve a problem without going to court. It is often used for simple cases. In this meeting, people from both sides of the problem talk with a neutral person, usually a retired judge. This person helps them find a solution without going through a full court trial.",
    example:
      "Imagine two neighbours disagree about a property line. Instead of going to court immediately, they agreed to a Settlement Conference. They sit down with a retired judge who helps them talk it out and agree on where the property line should be. This saves time and money compared to an entire court case.",
  },
  {
    id: 89,
    title: "Shuttle Mediation",
    content:
      "Shuttle mediation is like a mediator-guided conversation where people stay in separate rooms. The mediator goes back and forth between them, helping share information and offers. It is helpful when direct communication is challenging.",
    example:
      "Imagine two people in a dispute. Instead of talking face-to-face, they stay in different rooms. The mediator talks to one, then the other, helping them solve the situation without confrontation. It is like passing messages through a trusted messenger.",
  },
  {
    id: 90,
    title: "Signature",
    content:
      "A signature is like your stamp on a document, showing that you approve or agree with it. It is typically your name written specially.",
    example:
      "When you sign your name on a check, it shows that you are giving your permission to the bank to process it.",
  },
  {
    id: 91,
    title: "Special Master",
    content:
      "A special master is appointed by a judge to help manage and make decisions about specific parts of a legal case. They are like assistants to the judge and can be chosen before, during, or after a trial. The main goal of a special master is to save time and money in legal proceedings. Special Masters often act a bit like judges, especially in complex cases. They can work on a case for months or even years. They provide recommendations to the judge, who can turn them into official court orders if they agree. This helps the court run more smoothly and efficiently. Here are some everyday tasks they handle: </br><strong>(a)Overseeing Discovery Disputes:</strong> They make sure both sides in a case share information fairly. </br><strong>(b)Property Distribution:</strong> They help decide how property should be divided among parties in a legal dispute. </br><strong>(c)Accounting:</strong> Special Masters manage financial matters related to the case. </br><strong>(d)Administering Settlements:</strong> If an agreement is reached to end the case, they ensure everyone follows the terms. </br><strong>(e)Monitoring Decrees:</strong> They ensure that court orders are followed.",
    example: "",
  },
  {
    id: 92,
    title: "Tradition-Based Mediation",
    content:
      "Tradition-based mediation resolves disputes within a community, industry, or group that prioritises maintaining peace and harmony over strict legal justice. It is less concerned with keeping things secret, as the group is interested in the outcome. These mediators are often chosen for their wisdom and social standing, not just their expertise. They encourage open conversations, often involving rituals, to mend relationships, reconcile differences, and honour the community’s values.",
    example:
      "Imagine a small village in India where two families disagree over land ownership. Instead of going to court, they turn to a tradition-based mediator, a respected elder in the village. The mediator organises a meeting where everyone gathers under a sacred tree. They engage in a ceremony to symbolise unity and then have a heartfelt discussion about their concerns. The mediator helps them find a solution to resolve the land dispute and restore peace within the community, preserving their traditions and values.",
  },
  {
    id: 93,
    title: "Transformative Mediation",
    content:
      "Transformative mediation is a way to help people in a conflict understand each other’s needs and feel empowered. This process aims to transform how they communicate and, hopefully, resolve their dispute more effectively.",
    example:
      "Imagine two friends who are arguing because they have different opinions. Transformative mediation is like a conversation guide that helps them listen to each other better and recognise what is essential to the other person.",
  },
  {
    id: 94,
    title: "Two-Track Approach",
    content:
      "A two-track approach is a strategy that combines traditional legal proceedings (like going to court) with alternative dispute resolution (ADR) methods, such as negotiation or mediation. In this approach, people not directly involved in the court case handle the negotiation or ADR part. This can happen at the same time as the court case or during a break from it. It is useful when giving up on the court case is not an option, when the threat of court helps encourage the other party to consider a different solution, or when the court case has turned bitter and suggests a settlement might not be a good idea.",
    example:
      "Imagine two companies are in a lawsuit, but they also want to explore settling the dispute without altogether abandoning the lawsuit. They might use a two-track approach, where a neutral mediator talks to both sides about finding a middle ground. This happens while the court case is ongoing, giving them options beyond just litigation.",
  },
  {
    id: 95,
    title: "Worst Alternative to a Negotiated Agreement (WATNA)",
    content:
      "WATNA means Worst Alternative to a Negotiated Agreement. It is like your worst-case scenario in negotiations. It is what you will end up with if you cannot agree with the other party. Understanding your WATNA helps you evaluate the risks of not reaching a deal.",
    example:
      "Suppose you are negotiating a job offer, and the company will not meet your salary expectations. Your WATNA might be staying in your current job, which you are not happy with. Knowing your WATNA can make you think twice about rejecting the offer outright and help you consider the consequences of not reaching an agreement.",
  },
  {
    id: 96,
    title: "Witness",
    content:
      "A person, whether directly or indirectly involved in the situation, who comes to an arbitration hearing and shares their honest account of what they know about the dispute, claim, or problem. This helps the arbitrators better understand the situation.",
    example:
      "Imagine two people disagree about a contract. They both go to an arbitration hearing. One of them might bring a friend who saw them sign the contract. This friend is a witness. They can explain how the contract signing happened, even though they are not part of the argument.",
  },
  {
    id: 97,
    title: "Written Submissions",
    content:
      "Written Submissions refer to any documents or materials presented by a person involved in a legal case to support their arguments. When someone wants to prove their point or case, they can provide various written documents in legal matters. These can include legal memos (explanation letters), papers explaining their stance, copies of previous legal decisions, written records of what witnesses said, reports from experts, pictures, bills, receipts, invoices, or any other paper-based proof.",
    example:
      "Imagine someone is involved in a court case. To show they are correct, they might hand over documents like letters explaining their side, pictures to prove what happened, bills to show expenses or reports from experts who agree with them. All of these documents are called written submissions.",
  },
  {
    id: 98,
    title: "Zone of Possible Agreement (ZOPA)",
    content:
      "ZOPA stands for Zone of Possible Agreement. It is like the range where a deal can happen in negotiations. ZOPA is the area between what you want and what the other party is willing to give. If your expectations overlap with theirs, you have a ZOPA and can likely make a deal. However, if there is no overlap, reaching an agreement becomes challenging.",
    example:
      "Imagine you are selling a used laptop and want ₹5000 for it. The buyer is willing to pay up to ₹4500. In this case, the ZOPA is between ₹4500 and ₹5000. A deal is possible if you agree on a price within this range. However, if your asking price is ₹6000, there is no ZOPA because it is outside the buyer’s acceptable range.",
  },
];
export default data;
