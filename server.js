var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var AricleOne={
    title: 'Article One Diode',
    heading: 'Article One',
    date: 'Aug 9, 2017',
    
    content: `  <div>
                 <h1>
                     Diode:
                 </h1>
                 <p>
                     A diode is a device which only allows unidirectional flow of current if operated within a rated specified voltage level.
                </p>
                     
                     <p>
                         A diode only blocks current in the reverse direction while the reverse voltage is within a limited range otherwise reverse barrier breaks and the voltage at which this breakdown occurs is called reverse breakdown voltage. The diode acts as a valve in the electronic and electrical circuit. A P-N junction is the simplest form of the diode which behaves as ideally short circuit when it is in forward biased and behaves as ideally open circuit when it is in the reverse biased. Beside simple PN junction diodes, there are different types of diodes although the fundamental principles are more or less same. So a particular arrangement of diodes can convert AC to pulsating DC, and hence, it is sometimes also called as a rectifier.
                 </p>
                 <h1>
                     Working of Unbiased Diode:
                 </h1>
                 <p>
                    N-side will have a significant number of electrons, and very few holes (due to thermal excitation) whereas the p side will have a high concentration of holes and very few electrons. Due to this, a process called diffusion takes place. In this process free electrons from n side will diffuse (spread) into the p side and recombine with holes present there, leaving positive immobile (not moveable) ions in n side and creating negative immobile ions in p side of the diode. Hence, there will be uncovered positive donor ions in n-type side near the junction edge. Similarly, there will be uncovered negative acceptor ions in p-type side near the junction edge. Due to this, numbers of positive ions and negative ions will accumulate on n-side and p-side respectively. This region so formed is called as depletion region due to the “depletion” of free carriers in the region. Due to the presence of these positive and negative ions a static electric field called as barrier potential is created across the pn junction of the diode. It is called as "barrier potential" because it acts as a barrier and opposes the further migration of holes and electrons across the junction.
                 </p>
                 <h1>
                     Working of Forward biased Diode:
                 </h1>
                 <p>
                     In a PN junction diode when the forward voltage is applied i.e. positive terminal of a source is connected to the p-type side, and the negative terminal of the source is connected to the n-type side, the diode is said to be in forward biased condition. We know that there is a barrier potential across the junction. This barrier potential is directed in the opposite of the forward applied voltage. So a diode can only allow current to flow in the forward direction when forward applied voltage is more than barrier potential of the junction. This voltage is called forward biased voltage. For silicon diode, it is 0.7 volts. For germanium diode, it is 0.3 volts. When forward applied voltage is more than this forward biased voltage, there will be forward current in the diode, and the diode will become short circuited. Hence, there will be no more voltage drop across the diode beyond this forward biased voltage, and forward current is only limited by the external resistance connected in series with the diode. Thus, if forward applied voltage increases from zero, the diode will start conducting only after this voltage reaches just above the barrier potential or forward biased voltage of the junction. The time, taken by this input voltage to reach that value or in other words, the time, taken by this input voltage to overcome the forward biased voltage is called recovery time.
                     </p>
                     <h1>
                         Working of Reverse biased Diode
                     </h1>
                     <p>
                         Now if the diode is reverse biased i.e. positive terminal of the source is connected to the n-type end, and the negative terminal of the source is connected to the p-type end of the diode, there will be no current through the diode except reverse saturation current. This is because at the reverse biased condition the depilation layer of the junction becomes wider with increasing reverse biased voltage. Although there is a tiny current flowing from n-type end to p-type end in the diode due to minority carriers. This tiny current is called reverse saturation current. Minority carriers are mainly thermally generated electrons and holes in p-type semiconductor and n-type semiconductor respectively. Now if reverse applied voltage across the diode is continually increased, then after certain applied voltage the depletion layer will destroy which will cause a huge reverse current to flow through the diode. If this current is not externally limited and it reaches beyond the safe value, the diode may be permanently destroyed. This is because, as the magnitude of the reverse voltage increases, the kinetic energy of the minority charge carriers also increase. These fast moving electrons collide with the other atoms in the device to knock-off some more electrons from them. The electrons so released further release much more electrons from the atoms by breaking the covalent bonds. This process is termed as carrier multiplication and leads to a considerable increase in the flow of current through the p-n junction. The associated phenomenon is called Avalanche Breakdown.
                     </p>
             </div>`
};

function createTemplate(data){
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
            var htmlTemplate= `
                <html>
                <head>
                    <title> 
                        ${title}
                    </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                     <link href="/ui/style.css" rel="stylesheet" />   
                </head>
                    <body>
                        <div class="Container">
                        <div>
                            <a href="/">Home</a>
                         </div>
                         <hr/>
                         <h3>
                             ${heading}
                         </h3>
                         <div>
                             ${date}
                         </div>
                            ${content}
                         </div>
                    </body>
            </html>
            
            
            `;
        return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
});

app.get('/article-two',function(req,res){
    res.send(createTemplate(ArticleOne));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
