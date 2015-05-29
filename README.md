# SOFIA: a SiLA PMS Consumer

SOFIA (<b>S</b>iLA-compliant, <b>O</b>pen source, <b>F</b>ast, <b>I</b>ntelligent <b>A</b>pplication) is a reference implementation of a <a href="http://www.sila-standard.org/standards/pms/">SiLA PMS Consumer</a>. Project SOFIA promotes the development of open source laboratory automation tools.

SOFIA enable you to connect multiple SiLA-compliant lab devices to your virtual lab, share and discover SiLA lab devices in your network, execute SiLA Commands (e.g. move a robot, dispense a liquid) and get data (e.g. temperature, status, duration) from your lab devices, and collaborate and share in real time your protocols/methods runs with any other user in your network.

A link to SOFIA's test site can be found here:

http://sila.test.wega-it.com/


A video of SOFIA controlling a dispenser in the lab can be seen in the following link:

https://youtu.be/lelSgY8S-pM

SOFIA is an open source, cross-platform project that was developed as a proof-of-concept for the SiLA core principles: the “Lab of the Future”, a rapid innovation ecosystem connecting devices and people, and exchanging knowledge. SOFIA facilitates the future open source development of more advanced functionalities of a SiLA PMS, such as a error handling, scheduler, workflow engine, device management, etc. 

SOFIA could potentially be developed into an on-demand laboratory services hosted in the cloud, where user can run real-time experiments in remote labs across the globe.


# How to run
To install and run SOFIA, you first need to install <a href="http://git-scm.com/">git</a>, <a href="https://nodejs.org/">node.js (v0.12.2+)</a>, <a href="https://www.npmjs.com/">npm (v2.7.4)</a>, and <a href="https://www.meteor.com/">meteor (v1.1)</a>. The "run.js" script will run only in node.js version 0.12 or higher (check in the terminal your version with "node -v").

The following commands are tested and working in Linux (Ubuntu 14.04) and Mac OS X. The "run.js" script doesn't run in Windows (yet), althought SOFIA is fully compatible for Windows. A new "run.js" will be created soon to allow the installation in Windows.

<dl>
  <dt>1. Download SOFIA:</dt>
  <dd><code>git clone https://github.com/ebastidas/sofia-sila-pms.git</code></dd>
  <dt>2. Run SOFIA:</dt>
  <dd><code>cd sofia-sila-pms/</code><br/>
      <code>node run.js</code>
  </dd>
</dl>

SOFIA will run locally now at <a href="http://127.0.0.1:3000/">http://127.0.0.1:3000/</a> in your browser, and will be able to connect and control SiLA lab devices/drivers <b>only in the same local IP</b> (running in different ports).

If you need to communicate to SiLA lab devices/drivers hosted in different IPs (for instance, a Dispenser is located at 192.168.0.2, a Robot is located at 192.168.0.3), then you can run SOFIA as follows with environmental variables (SOFIA_IP and SOFIA_PORT) that specifies the IP and port of the machine where SOFIA is currently running (for instance, 192.168.0.1):

<dl>
  <dt></dt>
  <dd>
<code>env SOFIA_IP=192.168.0.1 SOFIA_PORT=80 node run.js</code>
  </dd>
</dl>

SOFIA will run now at <a href="http://192.168.0.1/">http://192.168.0.1:80/</a> in your browser, and will be able to connect and control all the SiLA lab devices/drivers within your <b>local network</b>.


# TODO
- Instructions to install SOFIA in Windows


Copyright (c) 2015 <a href="http://www.wega-it.com/">wega Informatik AG</a> | <a href="mailto:erick.bastidas@wega-it.com">Erick Bastidas</a>
