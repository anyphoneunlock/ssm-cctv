const fs = require('fs');
let c = fs.readFileSync('about.html', 'utf8');

const oldLogos = `<div class="client-logos">
            <div class="trust-logo"><a href="https://www.morganautogroup.com/" target="_blank" rel="noopener">Morgan Auto Group</a></div>
            <div class="trust-logo"><a href="https://bodegonfl.com/" target="_blank" rel="noopener">Bodegon Supermarkets</a></div>
            <div class="trust-logo"><a href="https://pcsystemz.com/" target="_blank" rel="noopener">PC Systemz</a></div>
            <div class="trust-logo"><a href="https://jlbrenovations.com/" target="_blank" rel="noopener">JLB Renovations</a></div>
            <div class="trust-logo"><a href="https://www.havanacubanfood.com" target="_blank" rel="noopener">Havana Cuban Food</a></div>
            <div class="trust-logo"><a href="https://www.birdsallmarine.com" target="_blank" rel="noopener">Birdsall Marine</a></div>
            <div class="trust-logo"><a href="https://www.fsresidential.com/corporate/" target="_blank" rel="noopener">First Service Res.</a></div>
            <div class="trust-logo"><a href="https://signconnectionusa.com/" target="_blank" rel="noopener">Sign Connection</a></div>
          </div>`;

const newLogos = `<div class="client-logos">
            <div class="trust-logo"><a href="https://www.morganautogroup.com/" target="_blank" rel="noopener"><img src="images/clients/morgan.svg" alt="Morgan Auto Group" onerror="this.parentElement.innerHTML='Morgan Auto Group'"></a></div>
            <div class="trust-logo"><a href="https://bodegonfl.com/" target="_blank" rel="noopener"><img src="images/clients/bodegon.png" alt="Bodegon Supermarkets"></a></div>
            <div class="trust-logo"><a href="https://pcsystemz.com/" target="_blank" rel="noopener"><img src="images/clients/pcsystemz.jpg" alt="PC Systemz"></a></div>
            <div class="trust-logo"><a href="https://jlbrenovations.com/" target="_blank" rel="noopener"><img src="images/clients/jlb.png" alt="JLB Renovations"></a></div>
            <div class="trust-logo"><a href="https://www.havanacubanfood.com" target="_blank" rel="noopener"><img src="images/clients/havana.png" alt="Havana Cuban Food"></a></div>
            <div class="trust-logo"><a href="https://www.birdsallmarine.com" target="_blank" rel="noopener"><img src="images/clients/birdsall.png" alt="Birdsall Marine"></a></div>
            <div class="trust-logo"><a href="https://www.fsresidential.com/corporate/" target="_blank" rel="noopener"><img src="images/clients/fsr.svg" alt="First Service Residential" onerror="this.parentElement.innerHTML='First Service Res.'"></a></div>
            <div class="trust-logo"><a href="https://signconnectionusa.com/" target="_blank" rel="noopener"><img src="images/clients/sign.svg" alt="Sign Connection" onerror="this.parentElement.innerHTML='Sign Connection'"></a></div>
          </div>`;

c = c.replace(oldLogos, newLogos);
fs.writeFileSync('about.html', c);
console.log('Updated about.html with client logos');
