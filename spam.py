import numpy as np 
import pandas as pd

data=pd.read_csv("<yourFilePath>")
data
#============================================================================

data.columns
#============================================================================

data.info()
#============================================================================

data.isna().sum()
#============================================================================

data['Spam']=data['Category'].apply(lambda x:1 if x=='spam' else 0)
data.head(5)
#============================================================================

from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test=train_test_split(data.Message,data.Spam,test_size=0.25)
#============================================================================

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
#============================================================================

from sklearn.pipeline import Pipeline
clf=Pipeline([
    ('vectorizer',CountVectorizer()),
    ('nb',MultinomialNB())
])
#============================================================================

clf.fit(X_train,y_train)
#============================================================================


emails=[
    'Sounds great! Are you home now?',
    'Will u meet ur dream partner soon? Is ur career off 2 a flyng start? 2 find out free, txt HORO followed by ur star sign, e. g. HORO ARIES'
]
#============================================================================


clf.predict(emails)
#============================================================================

clf.score(X_test,y_test)
#============================================================================



Data Set
#============================================================================
Category,Message
ham,Go until jurong point, crazy.. Available only in bugis n great world la e buffet... Cine there got a...
ham,Ok lar... Joking wif u oni...
spam,Free entry in 2 a wkly comp to win FA Cup final tkts 21st May 2005. Text FA to 87121 to receive entr...
ham,U dun say so early hor... U c already then say...
ham,Nah I don't think he goes to usf, he lives around here though
spam,FreeMsg Hey there darling it's been 3 week's now and no word back! I'd like some fun you up for it s...
ham,Even my brother is not like to speak with me. They treat me like aids patent.
ham,As per your request 'Melle Melle (Oru Minnaminunginte Nurungu Vettam)' has been set as your callertu...
spam,WINNER!! As a valued network customer you have been selected to receivea £900 prize reward! To claim...
spam,Had your mobile 11 months or more? U R entitled to Update to the latest colour mobiles with camera f...
ham,I'm gonna be home soon and i don't want to talk about this stuff anymore tonight, k? I've cried enou...
spam,SIX chances to win CASH! From 100 to 20,000 pounds txt> CSH11 and send to 87575. Cost 150p/day, 6day...
spam,URGENT! You have won a 1 week FREE membership in our £100,000 Prize Jackpot! Txt the word: CLAIM to ...
ham,I've been searching for the right words to thank you for this breather. I promise i wont take your h...
ham,I HAVE A DATE ON SUNDAY WITH WILL!!
spam,XXXMobileMovieClub: To use your credit, click the WAP link in the next txt message or click here>> h...
ham,Oh k...i'm watching here:)
ham,Eh u remember how 2 spell his name... Yes i did. He v naughty make until i v wet.
ham,Fine if that’s the way u feel. That’s the way its gota b
spam,England v Macedonia - dont miss the goals/team news. Txt ur national team to 87077 eg ENGLAND to 870...
ham,Is that seriously how you spell his name?
ham,I‘m going to try for 2 months ha ha only joking
ham,So ü pay first lar... Then when is da stock comin...
ham,Aft i finish my lunch then i go str down lor. Ard 3 smth lor. U finish ur lunch already?
ham,Ffffffffff. Alright no way I can meet up with you sooner?
ham,Just forced myself to eat a slice. I'm really not hungry tho. This sucks. Mark is getting worried. H...
ham,Lol your always so convincing.
ham,Did you catch the bus ? Are you frying an egg ? Did you make a tea? Are you eating your mom's left o...
ham,I'm back &amp; we're packing the car now, I'll let you know if there's room
ham,Ahhh. Work. I vaguely remember that! What does it feel like? Lol
ham,Wait that's still not all that clear, were you not sure about me being sarcastic or that that's why ...
ham,Yeah he got in at 2 and was v apologetic. n had fallen out and she was actin like spoilt child and h...
ham,K tell me anything about you.
ham,For fear of fainting with the of all that housework you just did? Quick have a cuppa
spam,Thanks for your subscription to Ringtone UK your mobile will be charged £5/month Please confirm by r...
ham,Yup... Ok i go home look at the timings then i msg ü again... Xuhui going to learn on 2nd may too bu...
ham,Oops, I'll let you know when my roommate's done
ham,I see the letter B on my car
ham,Anything lor... U decide...
ham,Hello! How's you and how did saturday go? I was just texting to see if you'd decided to do anything ...
ham,Pls go ahead with watts. I just wanted to be sure. Do have a great weekend. Abiola
ham,Did I forget to tell you ? I want you , I need you, I crave you ... But most of all ... I love you m...
spam,07732584351 - Rodger Burns - MSG = We tried to call you re your reply to our sms for a free nokia mo...
ham,WHO ARE YOU SEEING?
ham,Great! I hope you like your man well endowed. I am &lt;#&gt; inches...
ham,No calls..messages..missed calls
ham,Didn't you get hep b immunisation in nigeria.
ham,Fair enough, anything going on?
ham,Yeah hopefully, if tyler can't do it I could maybe ask around a bit
ham,U don't know how stubborn I am. I didn't even want to go to the hospital. I kept telling Mark I'm no...
ham,What you thinked about me. First time you saw me in class.
ham,A gram usually runs like &lt;#&gt; , a half eighth is smarter though and gets you almost a whole se...
ham,K fyi x has a ride early tomorrow morning but he's crashing at our place tonight
ham,Wow. I never realized that you were so embarassed by your accomodations. I thought you liked it, sin...
spam,SMS. ac Sptv: The New Jersey Devils and the Detroit Red Wings play Ice Hockey. Correct or Incorrect?...
ham,Do you know what Mallika Sherawat did yesterday? Find out now @ &lt;URL&gt;
spam,Congrats! 1 year special cinema pass for 2 is yours. call 09061209465 now! C Suprman V, Matrix3, Sta...
ham,Sorry, I'll call later in meeting.
ham,Tell where you reached
ham,Yes..gauti and sehwag out of odi series.
ham,Your gonna have to pick up a $1 burger for yourself on your way home. I can't even move. Pain is kil...
ham,Ha ha ha good joke. Girls are situation seekers.
ham,Its a part of checking IQ
ham,Sorry my


