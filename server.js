var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;

var config = {
    user: 'dineshmanikantatimothiraju58',
    database: 'dineshmanikantatimothiraju58',
    host: 'http://db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
    
};


var app = express();
app.use(morgan('combined'));

var Articles = {

        'Article-one' : {
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
                             
                             <br/>
                             
                             <hr/>
                             
                            <div class="footer1">
                                If you like my content like me using this button <button id="counter1">ClickMe!</button>. <span id = "count1">0</span> and do share your comments below.
                                
                                <br/>
                                <h3>
                                Comments
                                </h3>
                                <input type="text" id="comment" placeholder="comment"> </input>
                                <input type="submit1" id="submit_btn1" value="submit1" ></input>
                                <ul id="commentlist">
                                </ul>
                            </div>
                     </div>`
        },
        'Article-two' : {
            title: 'Article Two Transistor',
            heading: 'Article Two',
            date: 'Aug 10, 2017',
            
            content: ` <div>
                 <h1>
                     Transistor:
                 </h1>
                 <p>
                     A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. It is composed of semiconductor material usually with at least three terminals for connection to an external circuit. A voltage or current applied to one pair of the transistor's terminals controls the current through another pair of terminals. Because the controlled (output) power can be higher than the controlling (input) power, a transistor can amplify a signal. Today, some transistors are packaged individually, but many more are found embedded in integrated circuits.
                 </p>
                 <h1>
                     Inventors:
                 </h1>
                 <p>
                     The transistor is the fundamental building block of modern electronic devices, and is ubiquitous in modern electronic systems. Julius Edgar Lilienfeld patented a field-effect transistor in 1926[1] but it was not possible to actually construct a working device at that time. The first practically implemented device was a point-contact transistor invented in 1947 by American physicists John Bardeen, Walter Brattain, and William Shockley. The transistor revolutionized the field of electronics, and paved the way for smaller and cheaper radios, calculators, and computers, among other things. The transistor is on the list of IEEE milestones in electronics, and Bardeen, Brattain, and Shockley shared the 1956 Nobel Prize in Physics for their achievement.
                 </p>
                 <h1>
                     Historical Considerations:
                 </h1>
                 <p>
                     The essential usefulness of a transistor comes from its ability to use a small signal applied between one pair of its terminals to control a much larger signal at another pair of terminals. This property is called gain. It can produce a stronger output signal, a voltage or current, which is proportional to a weaker input signal; that is, it can act as an amplifier. Alternatively, the transistor can be used to turn current on or off in a circuit as an electrically controlled switch, where the amount of current is determined by other circuit elements.
                     </p>
                     <p>There are two types of transistors, which have slight differences in how they are used in a circuit. A bipolar transistor has terminals labeled base, collector, and emitter. A small current at the base terminal (that is, flowing between the base and the emitter) can control or switch a much larger current between the collector and emitter terminals. For a field-effect transistor, the terminals are labeled gate, source, and drain, and a voltage at the gate can control a current between source and drain.
                     </p>
                     <p>The image represents a typical bipolar transistor in a circuit. Charge will flow between emitter and collector terminals depending on the current in the base. Because internally the base and emitter connections behave like a semiconductor diode, a voltage drop develops between base and emitter while the base current exists. The amount of this voltage depends on the material the transistor is made from, and is referred to as VBE.
                 </p>
                 
             </div>`
        },
        'Article-three' : {
            title: 'Article Three IntegratedCircuits',
            heading: 'Article Three',
            date: 'Aug 10, 2017',
            
            content: `   <div>
                 <h1>
                     Integrated Circuit:
                 </h1>
                 <p>
                     An integrated circuit or monolithic integrated circuit (also referred to as an IC, a chip, or a microchip) is a set of electronic circuits on one small flat piece (or "chip") of semiconductor material, normally silicon. The integration of large numbers of tiny transistors into a small chip results in circuits that are orders of magnitude smaller, cheaper, and faster than those constructed of discrete electronic components. The IC's mass production capability, reliability and building-block approach to circuit design has ensured the rapid adoption of standardized ICs in place of designs using discrete transistors. ICs are now used in virtually all electronic equipment and have revolutionized the world of electronics. Computers, mobile phones, and other digital home appliances and are now inextricable parts of the structure of modern societies, made possible by the small size and low cost of ICs.
                     </p>
                     <p>
                         ICs were made possible by experimental discoveries showing that semiconductor devices could perform the functions of vacuum tubes, and by mid-20th-century technology advancements in semiconductor device fabrication. Since their origins in the 1960s, the size, speed, and capacity of chips have progressed enormously, driven by technical advances that allow more and more transistors on chips of the same size - a modern chip may have several billion transistors in an area the size of a human fingernail. These advances, roughly following Moore's law, allow a computer chip of today to have millions of times the capacity and thousands of times the speed of the computer chips of the early 1970s.
                         </p>
                         <p>
                             ICs have two main advantages over discrete circuits: cost and performance. Cost is low because the chips, with all their components, are printed as a unit by photolithography rather than being constructed one transistor at a time. Furthermore, packaged ICs use much less material than discrete circuits. Performance is high because the IC's components switch quickly and consume comparatively little power because of their small size and close proximity. The main disadvantage of ICs is the high cost to design them and fabricate the required photomasks. This high initial cost means ICs are only practical when high production volumes are anticipated.                
                            </p>
                 <h1>
                     Invention:
                 </h1>
                 <p>
                    Early developments of the integrated circuit go back to 1949, when German engineer Werner Jacobi (Siemens AG)[4] filed a patent for an integrated-circuit-like semiconductor amplifying device[5] showing five transistors on a common substrate in a 3-stage amplifier arrangement. Jacobi disclosed small and cheap hearing aids as typical industrial applications of his patent. An immediate commercial use of his patent has not been reported.
                    </p>
                    
                    <p>
                        The idea of the integrated circuit was conceived by Geoffrey Dummer (1909–2002), a radar scientist working for the Royal Radar Establishment of the British Ministry of Defence. Dummer presented the idea to the public at the Symposium on Progress in Quality Electronic Components in Washington, D.C. on 7 May 1952.[6] He gave many symposia publicly to propagate his ideas and unsuccessfully attempted to build such a circuit in 1956.
                        </p>
                        
                        <p>
                            A precursor idea to the IC was to create small ceramic squares (wafers), each containing a single miniaturized component. Components could then be integrated and wired into a bidimensional or tridimensional compact grid. This idea, which seemed very promising in 1957, was proposed to the US Army by Jack Kilby and led to the short-lived Micromodule Program (similar to 1951's Project Tinkertoy).[7] However, as the project was gaining momentum, Kilby came up with a new, revolutionary design: the IC.
                 </p>
                 <h1>
                     Design:
                 </h1>
                 <p>
                     The cost of designing and developing a complex integrated circuit is quite high, normally in the multiple tens of millions of dollars.[28] This only makes economic sense if production volume is high, so the non-recurring engineering (NRE) costs are spread across typically millions of production units.
                     </p>
                     <p>
                         Modern semiconductor chips have billions of components, and are too complex to be designed by hand. Software tools to help the designer are essential. Electronic Design Automation (EDA), also referred to as Electronic Computer-Aided Design (ECAD),[29] is a category of software tools for designing electronic systems, including integrated circuits. The tools work together in a design flow that engineers use to design and analyze entire semiconductor chips.
                     </p>
                 
             </div>`
        }

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
                        <div class="Container02">
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

var pool = new Pool(config);
app.get('/test-db', function(req,res){
    
    pool.query('SELECT * FROM test', function (err,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
        
    });
    
});

var counter = 0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
    
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


var names=[];
app.get('/submit-name/',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names))
    
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(Articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
