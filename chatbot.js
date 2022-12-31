// Get the chatbot, chat log, and chat form elements
const chatbot = document.getElementById('chatbot');
const chatLog = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');

chatForm.addEventListener('submit', handleSubmit);

// Function to get the chatbot's response to a question
// Function to get the chatbot's response to a question
function getResponse(question) {
	// Normalize the question to lowercase
	const normalizedQuestion = question.toLowerCase();

	// List of possible prompts and responses
	const prompts = [
		{
			prompt: ['hi'],
			response: 'Hello!'
		},
		{
			prompt: ['how are you'],
			response: "I'm just a chatbot, so I don't have feelings. But I'm here to help you with any questions you might have."
		},
		{
			prompt: ['hello'],
			response: "Hello!"
		},
		{
			prompt: ['what is your name'],
			response: 'My name is chatbot'
		},
		{
			prompt: ['who created you'],
			response: 'I was created by Paul Craig and an OpenAI chatbot called ChatGPT, Paul used ChatGPT to structure the code designed to make me'
		},
		{
			prompt: ['what is your name'],
			response: "My name is Chatbot. Nice to meet you!"
		},
		{
			prompt: ['what can you do'],
			response: 'I have only been built to answer questions about AoH Clan at the moment i will maybe be able to answer more once i have been given more responses'
		},
		{
			prompt: ['aoh clan founded'],
			response: 'AoH Clan was founded in 2009 by Paul Craig and Tony McAdam'
		},
		{
			prompt: ['aoh clan was founded'],
			response: 'AoH Clan was founded in 2009 by Paul Craig and Tony McAdam'
		},
		{
			prompt: ['aoh clan was founded'],
			response: 'AoH Clan was founded in 2009 by Paul Craig and Tony McAdam'
		},
		{
			prompt: ['who founded aoh clan'],
			response: 'AoH Clan was founded in 2009 by Paul Craig and Tony McAdam'
		},
		{
			prompt: ['information about aoh'],
			response: 'AoH Clan started back in 2009, They were mainly friends who played call of duty together but started uploading youtube videos and quickly grew to a gaming community that enjoyed competing and uploading their best clips and moments to youtube'
		},
		{
			prompt: ['tell the time'],
			response: 'I shouldnt need to tell you the time its underneath each message'
		},
		{
			prompt: ['bawbag of the week'],
			response: 'In this current version of AoH chatbot I cant display bawbag of the week but to hazard a guess its probably that Jamesy guy hes a bit of a bawbag'
		},
		{
			prompt: ['best rocket league player'],
			response: "Toss up between Dazza or Rage for the best Rocket League player in the clan but Rage is slightly better"
		},
		{
			prompt: ['best at rocket league'],
			response: "Toss up between Dazza or Rage for the best Rocket League player in the clan but Rage is slightly better"
		},
		{
			prompt: ['best cod player'],
			response: "Speedy is probably the best Call of Duty player in the clan even though he doesnt play much anymore"
		},
		{
			prompt: ['best call of duty player'],
			response: "Speedy is probably the best Call of Duty player in the clan even though he doesnt play much anymore"
		},
		{
			prompt: ['old clan videos'],
			response: "Most of the old clan videos are currently unlisted, however you will find a few that are still listed by searching AoH clan on youtube"
		},
		{
			prompt: ['who made clan videos'],
			response: "Most of the old clan videos where made by AoH PAUL with exception to a few videos"
		},
		{
			prompt: ['clan leader'],
			response: "AoH Clan doesnt officially have a leader but more of a leadership of influencial players that can invite and kick other lower ranking members. This consists of original clan members, friends, family and the original founders of the clan"
		},
		{
			prompt: ['know how to answer'],
			response: "I know how to answer certain questions asked to me as my creator AoH PAUL hard coded the responses into me"
		},
		{
			prompt: ['know what to answer'],
			response: "I know how to answer certain questions asked to me as my creator AoH PAUL hard coded the responses into me"
		},
		{
			prompt: ['aoh paul'],
			response: "AoH Paul is a clan founder, his real name is Paul Craig. He created the clan with AoH TONY in 2009. He is the main editor of the AoH clan videos and creator of this chatbot"
		},
		{
			prompt: ['paul aoh'],
			response: "AoH Paul is a clan founder, his real name is Paul Craig. He created the clan with AoH TONY in 2009. He is the main editor of the AoH clan videos and creator of this chatbot"
		},
		{
			prompt: ['aoh tony'],
			response: "AoH Tony is a clan founder, his real name is Tony McAdam. He created the clan with AoH PAUL in 2009. He is well known for motivational speeches"
		},
		{
			prompt: ['tony aoh'],
			response: "AoH Tony is a clan founder, his real name is Tony McAdam. He created the clan with AoH PAUL in 2009. He is well known for motivational speeches"
		},
		{
			prompt: ['jason'],
			response: "AoH Jason is an AoH clan member, his real name is Jason Austin. He joined the clan in 2011. He has dodgy eyes and was known as neggy jegy for a brief period. These days he is known as Mr IPTV or Tonys chib"
		},
		{
			prompt: ['rheas'],
			response: "AoH Rheas is an AoH clan member, his real name is Rheas Shevlin. He joined the clan in 2014. He is one of the best Fifa players in the clan and likes to argue about Ronaldo and Messi"
		},
		{
			prompt: ['rage'],
			response: "AoH Rage is an AoH clan member, his real name is Ian Kinsella. He joined the clan in 2018. He became a clan member through Ark survival and joined the AoH boys in their Ark clan, likes to argue about Ronaldo and Messi"
		},
		{
			prompt: ['kerr'],
			response: "AoH Kerr aka Kerrfaewishy is an AoH clan member, his real name is Stephen Kerr. He joined the clan in 2015. He is the oldest member of AoH Clan"
		},
		{
			prompt: ['dazza'],
			response: "AoH Dazza aka zzzDazzaboyzzz is an AoH clan member, his real name is Darren Britton. He joined the clan in 2014. #AretenerJoshuner"
		},
		{
			prompt: ['pube checker'],
			response: 'Peter Farrell is the clan pube checker, run all pube checking request directly to him'
		},
		{
			prompt: ['farrell'],
			response: 'AoH Farrell is an AoH clan member, his real name is Peter Farrell, he joined the clan in 2014 and is the clan official pube checker, run all pube checking requests directly to him'
		},
		{
			prompt: ['mcilroy'],
			response: 'AoH cookie is an AoH clan member, his real name is Ross McIlroy, he joined the clan in 2014. keep your animals and grannys clear of this man'
		},
		{
			prompt: ['cookie'],
			response: 'AoH cookie is an AoH clan member, his real name is Ross McIlroy, he joined the clan in 2014. keep your animals and grannys clear of this man'
		},
		{
			prompt: ['speedy'],
			response: 'AoH Speedy is an AoH clan member, his real name is Mark Diamond, he joined the clan in 2015. Sweaty wee guy can beat most people on most games'
		},
		{
			prompt: ['logan'],
			response: 'AoH Logan is an AoH clan member, his real name is Logan Nesbitt, he joined the clan in 2014.'
		},
		{
			prompt: ['sonia'],
			response: 'AoH Sonia is an AoH clan member, her real name is Sonia Britton, she joined the clan in 2017. She is the fiance of clan member AoH Dazza'
		},
		{
			prompt: ['matu'],
			response: 'AoH Matu is an AoH clan member, his real name is Matthew Murray, he joined the clan in 2009. He is AoH PAUL and AoH TONYS cousin'
		},
		{
			prompt: ['nathan'],
			response: 'AoH Nathan is an AoH clan member, his real name is Nathan Officer, he joined the clan in 2009. His da is a screw dont trust him'
		},
		{
			prompt: ['ethan'],
			response: 'AoH Ethan is an AoH clan member, his real name is Ethan Jeffrey, he joined the clan in 2015.'
		},
		{
			prompt: ['drever'],
			response: 'AoH Drever is an AoH clan member, his real name is Craig Drever, he joined the clan in 2009. If yer looking for a property sign hes your guy'
		},
		{
			prompt: ['hunter'],
			response: 'AoH Hunter is an AoH clan member, his real name is David Hunter, he joined the clan in 2019. He joined through Ark Survival. He is a 6ft7 goth #TheUndertaker'
		},
		{
			prompt: ['two'],
			response: 'TWO aka The wet ones tribe started on Ark by AoH clan members'
		},
		{
			prompt: ['the wet ones'],
			response: 'TWO is The wet ones tribe started on Ark by AoH clan members'
		},
		{
			prompt: ['no mercy'],
			response: 'no mercy is the name of a tribe started on Ark by AoH clan members'
		},
		{
			prompt: ['name on ark'],
			response: 'AoH clan members started a few tribes on ark the main ones being No Mercy and The Wet Ones'
		},
		{
			prompt: ['what is aoh clan'],
			response: 'AoH Clan is a gaming community of friends that play games together. They used to upload to Youtube and stream to Twitch but currently do not'
		},
		{
			prompt: ['what do you do'],
			response: "I'm here to help you with any questions you might have. Just ask me anything!"
		}
	];

	// Iterate through the list of prompts
	for (const {prompt, response} of prompts) {
		// Check if the normalized question includes any of the prompts
		for (const p of prompt) {
			if (normalizedQuestion.includes(p)) {
				return response;
			}
		}
	}

	// If no prompts were found, return a default response
	return "I'm sorry, I don't understand your question. Check your spelling and ask me again or ask me something else?";
}

// Function to handle the chat form submission
function handleSubmit(event) {
	// Prevent the form from reloading the page
	event.preventDefault();

	// Get the user's message
	const message = chatForm.elements['chat-input'].value;

	// Add the user's message to the chat log
	addMessage('User', message);

	// Get the chatbot's response to the user's message
	const response = getResponse(message);

	// Add the chatbot's response to the chat log
	addMessage('Chatbot', response);

	// Clear the chat input
	chatForm.elements['chat-input'].value = '';
}

// Function to add a message to the chat log
function addMessage(sender, messageText) {
	// Create a new message element
	const message = document.createElement('div');

	// Set the class name based on the sender
	if (sender === 'User') {
		message.classList.add('user-message');
	} else if (sender === 'Chatbot') {
		message.classList.add('bot-message');
	}

	// Create the sender element
	const senderElement = document.createElement('div');
	senderElement.classList.add('message-sender');
	senderElement.textContent = sender;

	// Create the message text element
	const textElement = document.createElement('div');
	textElement.classList.add('message-text');
	textElement.textContent = messageText;

	// Create the time element
	const timeElement = document.createElement('div');
	timeElement.classList.add('message-time');
	timeElement.textContent = new Date().toLocaleTimeString();

	// Append the sender, message text, and time to the message element
	message.appendChild(senderElement);
	message.appendChild(textElement);
	message.appendChild(timeElement);

	// Append the message element to the chat log
	chatLog.appendChild(message);

	// Scroll the chat log to the bottom
	chatLog.scrollTop = chatLog.scrollHeight;
}