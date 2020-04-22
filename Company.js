//Defining function company
function company(name, email, phone, owner, street, city, state, country, duns, type) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.owner = owner;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.duns = duns;
    this.type = type;
}



//Defining company objects
var bmw = new company('BMW', 'kenny@gmail.com', '346-222-3331', 'BMW', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var mercedes = new company('Berkleey', 'bb@bb.com', '346-222-3332', 'Mercedes', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Buyer');
var toyota = new company('Toyota', 'gre@gmail.com', '346-222-3333', 'Toyota', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var chevrolet = new company('Chevrolet', 'anny@gmail.com', '346-222-3334', 'Chevrolet', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Buyer');
var nissan = new company('Nissan', 'Nissan@gmail.com', '346-222-3335', 'Nissan', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var volvo = new company('Volvo', 'Volvo@gmail.com', '346-222-3336', 'Volvo', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var honda = new company('Honda', 'Honda@gmail.com', '346-222-3337', 'Honda', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var buick = new company('Buick', 'Buick@gmail.com', '346-222-3338', 'Buick', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var zoomCar = new company('Zoom Car', 'cc@cc.com', '346-222-3339', 'Dodge', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var uber = new company('Uber', 'Saab@gmail.com', '346-222-3330', 'Saab', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var ford = new company('Ford', 'ford@gmail.com', '346-222-3330', 'ford', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS11', 'Buyer');
var americanloco = new company('Americanloco', 'americanloco@gmail.com', '346-222-3330', 'americanloco', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS11', 'Buyer');
var ceat = new company('CEAT', 'ceat@gmail.com', '346-222-3331', 'CEAT', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var bosch = new company('Bosch', 'bosch@gmail.com', '346-222-3332', 'Bosch', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var dunlop = new company('Dunlop', 'dunlop@gmail.com', '346-222-3333', 'Dunlop', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var exide = new company('Exide', 'exide@gmail.com', '346-222-3334', 'Exide', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var goodyear = new company('Good Year', 'goodyear@gmail.com', '346-222-3335', 'Goodyear', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var mrf = new company('MRF', 'mrf@gmail.com', '346-222-3336', 'MRF', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var nipresspt = new company('Nipress PT', 'nipress@gmail.com', '346-222-3337', 'Nipress', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var linamar = new company('Linamar', 'linamar@gmail.com', '346-222-3338', 'Linamar', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var audi = new company('Audi', 'audi@gmail.com', '346-222-3339', 'Audi', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var fiat = new company('Fiat', 'fiat@gmail.com', '346-222-3330', 'Fiat', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var suzuki = new company('Suzuki', 'suzuki@gmail.com', '346-222-3330', 'Suzuki', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS11', 'Buyer');
var mazda = new company('Mazda', 'mazda@gmail.com', '346-222-3331', 'Mazda', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var lexus = new company('Lexus', 'lexus@gmail.com', '346-222-3332', 'Lexus', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var carlsson = new company('Carlsson', 'carlsson@gmail.com', '346-222-3333', 'Carlsson', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var hyundai = new company('Hyundai', 'hyundai@gmail.com', '346-222-3334', 'Hyundai', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var lear = new company('Lear', 'lear@gmail.com', '346-222-3335', 'Lear', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var tenneco = new company('Tenneco', 'tenneco@gmail.com', '346-222-3336', 'Tenneco', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var genuineParts = new company('GenuineParts', 'genuineparts@gmail.com', '346-222-3337', 'GenuineParts', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var gmc = new company('GMC', 'gmc@gmail.com', '346-222-3338', 'Gmc', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var towerAutomotive = new company('Tower Automotive', 'tower@gmail.com', '346-222-3339', 'Towermotive', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var denso = new company('Denso', 'denso@gmail.com', '346-222-3330', 'Denso', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var ferrari = new company('Ferrari', 'ferrari@gmail.com', '346-222-3331', 'Ferrari', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var tesla = new company('Tesla', 'tesla@gmail.com', '346-222-3332', 'Tesla', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var subaru = new company('Subaru', 'subaru@gmail.com', '346-222-3333', 'Subaru', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var kia = new company('Kia', 'kia@gmail.com', '346-222-3334', 'Kia Motors', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var landrover = new company('LandRover', 'land@gmail.com', '346-222-3335', 'Land Rover', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var volksWagen = new company('VolksWagen', 'volks@gmail.com', '346-222-3336', 'Volks Wagen', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var astonMartin = new company('AstonMartin', 'astonMartin@gmail.com', '346-222-3337', 'astonMartin', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var jaguar = new company('Jaguar', 'jaguar@gmail.com', '346-222-3338', 'Jaguar', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var jeep = new company('Jeep', 'jeep@gmail.com', '346-222-3339', 'Jeep', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var porsche = new company('Porsche', 'porsche@gmail.com', '346-222-3330', 'Porsche', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var lamborghini = new company('Lamborghini', 'lamborghini@gmail.com', '346-222-3334', 'Lamborghini', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var rollsroyce = new company('RollsRoyce', 'rollsroyce@gmail.com', '346-222-3335', 'rollsroyce', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var lotus = new company('Lotus', 'lotus@gmail.com', '346-222-3336', 'Lotus', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var seat = new company('Seat', 'seat@gmail.com', '346-222-3337', 'Seat', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var skoda = new company('Skoda', 'skoda@gmail.com', '346-222-3338', 'Skoda', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var smart = new company('Smart', 'smart@gmail.com', '346-222-3339', 'Smart', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var ds = new company('DS', 'ds@gmail.com', '346-222-3330', 'DS', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var mg = new company('MG', 'mg@gmail.com', '346-222-3331', 'MG', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var mini = new company('Mini', 'mini@gmail.com', '346-222-3332', 'Mini', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var infinity = new company('Infinity', 'infinity@gmail.com', '346-222-3333', 'Infinity', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var mitsubishi = new company('Mitsubishi', 'mitsubishi@gmail.com', '346-222-3334', 'Mitsubishi', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var maruti = new company('Maruti', 'maruti@gmail.com', '346-222-3335', 'Maruti', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var rav = new company('Rav', 'rav@gmail.com', '346-222-3336', 'Rav', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var denzo = new company('Denzo', 'denzo@gmail.com', '346-222-3337', 'Denzo', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var geely = new company('Geely', 'geely@gmail.com', '346-222-3338', 'Geely', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var opel = new company('Opel', 'opel@gmail.com', '346-222-3339', 'Opel', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var actron = new company('Actron', 'aa@aa.com', '346-222-3330', 'Acura', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var mahindra = new company('Mahindra', 'mahindra@gmail.com', '346-222-3331', 'Mahindra', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var hino = new company('Hino', 'hino@gmail.com', '346-222-3332', 'Hino', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var lincon = new company('Lincon', 'lincon@gmail.com', '346-222-3333', 'lincon', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var baic = new company('BAIC', 'baic@gmail.com', '346-222-3334', 'Baic', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var tvs = new company('TVS', 'tvs@gmail.com', '346-222-3335', 'Tvs', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var yamaha = new company('Yamaha', 'yamaha@gmail.com', '346-222-3336', 'Yamaha', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var magna = new company('Magna', 'magna@gmail.com', '346-222-3337', 'Magna', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var dodge = new company('Dodge', 'dodge@gmail.com', '346-222-3338', 'Dodge', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var jac = new company('JAC', 'jac@gmail.com', '346-222-3339', 'JAC', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var tatamotors = new company('TataMotors', 'tata@gmail.com', '346-222-3330', 'Ratan Tata', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var berklee = new company('Berklee', 'berklee@gmail.com', '346-222-3331', 'Berklee', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var clutchAuto = new company('ClutchAuto', 'clutchAuto@gmail.com', '346-222-3332', 'ClutchAuto', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var goodwayMachine = new company('GoodwayMachine', 'goodwayMachine@gmail.com', '346-222-3333', 'GoodwayMachine', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var hktCorp = new company('HKTCorp', 'hktCorp@gmail.com', '346-222-3334', 'HKTCorp', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var hilexCorp = new company('HILEXCorp', 'hilexCorp@gmail.com', '346-222-3335', 'hilexCorp', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var jbmAuto = new company('JBMAuto', 'jbmAuto@gmail.com', '346-222-3336', 'jbmAuto', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var litoGroup = new company('LitoGroup', 'litoGroup@gmail.com', '346-222-3337', 'litoGroup', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var exideGroup = new company('ExideGroup', 'exideGroup@gmail.com', '346-222-3338', 'ExideGroup', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var denaBank = new company('DenaBank', 'denaBank@gmail.com', '346-222-3339', 'DenaBank', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var danaGas = new company('DanaGas', 'danaGas@gmail.com', '346-222-3330', 'DanaGas', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var dunlopLtd = new company('DunlopLtd', 'dunlopLtd@gmail.com', '346-222-3331', 'DunlopLtd', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var ipRings = new company('IpRings', 'ipRings@gmail.com', '346-222-3332', 'IpRings', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var jkTyres = new company('JKTyres', 'jkTyres@gmail.com', '346-222-3333', 'JKTyres', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var krypton = new company('Krypton', 'krypton@gmail.com', '346-222-3334', 'krypton', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var legacyOil = new company('LegacyOil', 'legacyOil@gmail.com', '346-222-3335', 'legacyOil', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var litoGroup = new company('LitoGroup', 'litoGroup@gmail.com', '346-222-3336', 'litoGroup', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var liGroup = new company('LiGroup', 'liGroup@gmail.com', '346-222-3337', 'liGroup', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var minthGroup = new company('MinthGroup', 'minthGroup@gmail.com', '346-222-3338', 'minthGroup', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var angIndustry = new company('ANGIndustry', 'angIndustry@gmail.com', '346-222-3339', 'angIndustry', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var azureCorp = new company('AzureCorp', 'azureCorp@gmail.com', '346-222-3330', 'AzureCorp', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');
var dunlopIndustry = new company('DunlopIndustry', 'dunlopIndustry@gmail.com', '346-222-3331', 'DunlopIndustry', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Supplier');
var tpRings = new company('TpRings', 'tpRings@gmail.com', '346-222-3332', 'TpRings', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Supplier');
var aaTyres = new company('AATyres', 'aaTyres@gmail.com', '346-222-3333', 'AATyres', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Supplier');
var kryptonGas = new company('KryptonGas', 'krypton@gmail.com', '346-222-3334', 'kryptonGas', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Supplier');
var legacyOilAndGas = new company('LegacyOilAndGas', 'legacyOilandgas@gmail.com', '346-222-3335', 'legacyOilAndGas', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Supplier');
var litoIndustry = new company('LitoIndustry', 'litoIndustry@gmail.com', '346-222-3336', 'litoIndustry', 'Pine  street', 'New York City', 'New York', 'USA', 'DUNS6', 'Supplier');
var AGSGroup = new company('AGSGroup', 'agsGroup@gmail.com', '346-222-3337', 'agsGroup', 'Maple  street', 'Oregon', 'portland', 'USA', 'DUNS7', 'Supplier');
var minthCorp = new company('MinthCorp', 'minthcorp@gmail.com', '346-222-3338', 'minthcorp', 'Hill  street', 'seatle', 'Washington', 'USA', 'DUNS8', 'Supplier');
var TTLIndustry = new company('TTLIndustry', 'TTLIndustry@gmail.com', '346-222-3339', 'TTLIndustry', 'Elm  street', 'New Jersey', 'New York', 'USA', 'DUNS9', 'Buyer');
var azureGroup = new company('AzureGroup', 'azuregroup@gmail.com', '346-222-3330', 'Azuregroup', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Buyer');


//object array
var companyList = [bmw, mercedes, toyota, chevrolet, nissan, volvo, honda, buick, zoomCar, uber, ford, americanloco, denso, towerAutomotive, gmc, genuineParts, tenneco, lear, hyundai, carlsson, lexus, mazda, suzuki, fiat, audi, linamar, nipresspt, goodyear, mrf, exide, dunlop, bosch, ceat, ferrari, tesla, subaru, kia, landrover, volksWagen,
    astonMartin, jaguar, jeep, porsche, lamborghini, rollsroyce, lotus, seat, skoda, smart, ds, mg, mini, mitsubishi, maruti, rav, denso,
    geely, opel, actron, mahindra, hino, lincon, baic, tvs, yamaha, magna, dodge, jac, tatamotors, berklee, clutchAuto, goodwayMachine,
    hktCorp, hilexCorp, jbmAuto, litoGroup, exideGroup, denaBank, danaGas, dunlopLtd, ipRings, jkTyres, krypton, legacyOil, litoGroup,
    minthGroup, liGroup, angIndustry, azureCorp, dunlopIndustry, tpRings, aaTyres, kryptonGas, legacyOilAndGas, litoIndustry, AGSGroup, minthCorp, TTLIndustry, azureGroup];

window.onload = function () {

  var companyJSON = localStorage.getItem("companyList");
    if (companyJSON == null) {
        companyList = [bmw, mercedes, toyota, chevrolet, nissan, volvo, honda, buick, zoomCar, uber, ford, americanloco, denso, towerAutomotive, gmc, genuineParts, tenneco, lear, hyundai, carlsson, lexus, mazda, suzuki, fiat, audi, linamar, nipresspt, goodyear, mrf, exide, dunlop, bosch, ceat, ferrari, tesla, subaru, kia, landrover, volksWagen,
            astonMartin, jaguar, jeep, porsche, lamborghini, rollsroyce, lotus, seat, skoda, smart, ds, mg, mini, mitsubishi, maruti, rav, denso,
            geely, opel, actron, mahindra, hino, lincon, baic, tvs, yamaha, magna, dodge, jac, tatamotors, berklee, clutchAuto, goodwayMachine,
            hktCorp, hilexCorp, jbmAuto, litoGroup, exideGroup, denaBank, danaGas, dunlopLtd, ipRings, jkTyres, krypton, legacyOil, litoGroup,
            minthGroup, liGroup, angIndustry, azureCorp, dunlopIndustry, tpRings, aaTyres, kryptonGas, legacyOilAndGas, litoIndustry, AGSGroup, minthCorp, TTLIndustry, azureGroup];
        localStorage.setItem("companyList", JSON.stringify(companyList));
    }
    else {
        companyList = JSON.parse(companyJSON);
    }
    renderCompany(companyList);
}
currentUser = JSON.parse(sessionStorage.getItem('userdetails'));

var seltype = currentUser.role;
var cmpName = currentUser.company;

if (seltype != 'SuperAdmin') {
    document.getElementById("Add-btn").style.visibility = 'hidden';     
}
//Rendering Company List
function renderCompany(companyList) {

    currentUser = JSON.parse(sessionStorage.getItem('userdetails'));

    var seltype = currentUser.role;
    var cmpName = currentUser.company;
    var tableBody = "";
    var tableHeader = "<tr ><th style='background-color:grey; font-family: Algerian; font-weight:bold'>Name</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>Email</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>Phone</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>Owner</th><th style='background-color:grey; font-family: Algerian; font-weight:bold' >Street</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>City</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>State</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>Country</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>Duns</th><th style='background-color:grey; font-family: Algerian; font-weight:bold'>Type</th>";
    if (seltype == 'SupplierAdmin' || seltype == 'SuperAdmin' || seltype == 'BuyerAdmin')
        tableHeader += " <th style='background-color:grey; font-family: Algerian; font-weight:bold'>Edit</th>";

    if (seltype == 'SuperAdmin')
        tableHeader += "<th style='background-color:grey; font-family: Algerian; font-weight:bold'>Delete</th>";

    tableHeader += "</tr> ";
    for (var i = 0; i < companyList.length; i++) {
        if (seltype == 'SupplierAdmin' ) {
            if (companyList[i].type == 'Buyer' || companyList[i].name == cmpName) {

                tableBody += "<tr id=" + i + " ><td>" + companyList[i].name + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].email + "</td>";
                tableBody = tableBody + "<td>" + companyList[i].phone + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].owner + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].street + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].city + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].state + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].country + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].duns + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].type + "</td>";
                if (seltype == 'SuperAdmin')
                    tableBody = tableBody + "<td id='editbtn'><button type='button'  value='Edit' class='popup' class='btn btn - primary btn - md' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td>" + "<td id='Deletebtn'><button type='button'  value='Delete' class='popup' class='btn btn - primary btn - md' onclick='del_popup(" + i + ")'><span class='glyphicon glyphicon-trash'></span></button></td></tr>";
                if (seltype == 'SupplierAdmin' || seltype == 'BuyerAdmin') {
                    if (cmpName == companyList[i].name)
                        tableBody = tableBody + "<td id='editbtn'><button  id='disable'type='button' value='edit' class='popup' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td></tr>";
                    else if (cmpName != companyList[i].name)
                        tableBody = tableBody + "<td id='editbtn'><button id='ntdisable' type='button' value='edit' class='popup' disabled='true' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td></tr>";
                }
                
            }
        }
        else
            if (seltype == 'Buyer')
            {
                if (companyList[i].type == 'Supplier' || companyList[i].name == cmpName) {
                    tableBody += "<tr id=" + i + " ><td>" + companyList[i].name + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].email + "</td>";
                    tableBody = tableBody + "<td>" + companyList[i].phone + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].owner + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].street + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].city + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].state + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].country + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].duns + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].type + "</td>";
                }
            }
       else
                if (seltype == 'Supplier') {
                    if (companyList[i].type == 'Buyer' || companyList[i].name == cmpName) {

                        tableBody += "<tr id=" + i + " ><td>" + companyList[i].name + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].email + "</td>";
                        tableBody = tableBody + "<td>" + companyList[i].phone + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].owner + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].street + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].city + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].state + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].country + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].duns + "</td>";
                        tableBody = tableBody + "<td >" + companyList[i].type + "</td>";
                    }
                }
        else
            if (seltype == 'BuyerAdmin' ) {
                if (companyList[i].type == 'Supplier' || companyList[i].name == cmpName) {

                    tableBody += "<tr id=" + i + " ><td>" + companyList[i].name + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].email + "</td>";
                    tableBody = tableBody + "<td>" + companyList[i].phone + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].owner + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].street + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].city + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].state + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].country + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].duns + "</td>";
                    tableBody = tableBody + "<td >" + companyList[i].type + "</td>";
                    if (seltype == 'SuperAdmin')
                        tableBody = tableBody + "<td id='editbtn'><button type='button'  value='Edit' class='popup' class='btn btn - primary btn - md' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td>" + "<td id='Deletebtn'><button type='button'  value='Delete' class='popup' class='btn btn - primary btn - md' onclick='del_popup(" + i + ")' ><span class='glyphicon glyphicon-trash'></span></button></td></tr>";
                    if (seltype == 'SupplierAdmin' || seltype == 'BuyerAdmin') {
                        if (cmpName == companyList[i].name)
                            tableBody = tableBody + "<td id='editbtn'><button  id='disable'type='button' value='edit' class='popup' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td></tr>";
                        else if (cmpName != companyList[i].name)
                            tableBody = tableBody + "<td id='editbtn'><button id='ntdisable' type='button' value='edit' class='popup' disabled='true' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td></tr>";

                    }
                }
            }
            else if (seltype == 'SuperAdmin') {

                tableBody += "<tr id=" + i + " ><td>" + companyList[i].name + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].email + "</td>";
                tableBody = tableBody + "<td>" + companyList[i].phone + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].owner + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].street + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].city + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].state + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].country + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].duns + "</td>";
                tableBody = tableBody + "<td >" + companyList[i].type + "</td>";
                if (seltype == 'SuperAdmin')
                    tableBody = tableBody + "<td id='editbtn'><button type='button'  value='Edit' class='popup' class='btn btn - primary btn - md' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td>" + "<td id='Deletebtn'><button type='button'  value='Delete' class='popup' class='btn btn - primary btn - md' onclick='del_popup(" + i + ")'><span class='glyphicon glyphicon-trash'></span></button></td></tr>";
                if (seltype == 'SupplierAdmin' || seltype == 'BuyerAdmin') {
                    if (cmpName == companyList[i].name)
                        tableBody = tableBody + "<td id='editbtn'><button  id='disable'type='button' value='edit' class='popup' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td></tr>";
                    else if (cmpName != companyList[i].name)
                        tableBody = tableBody + "<td id='editbtn'><button id='ntdisable' type='button' value='edit' class='popup' disabled='true' onclick='selectedRowToInput2(" + i + ")'><span class='glyphicon glyphicon-pencil'></span></button></td></tr>";

                }
            }

    }
    var table = "<table id= 'table1' class='table table-striped' class='table-responsive - md'>" + tableHeader + tableBody + "</table>";

    document.getElementById("CompanyList").innerHTML = table;
}

function searchFunction() {
    var matchedCompanies = [];


    var input, filter, i;
    input = document.getElementById("Searchinput-btn");
    filter = input.value.toUpperCase();

    for (i = 0; i < companyList.length; i++) {
        if (companyList[i].name.toUpperCase().indexOf(filter) > -1 || companyList[i].email.toUpperCase().indexOf(filter) > -1 ||
            companyList[i].phone.toUpperCase().indexOf(filter) > -1 || companyList[i].owner.toUpperCase().indexOf(filter) > -1 ||
            companyList[i].street.toUpperCase().indexOf(filter) > -1 || companyList[i].city.toUpperCase().indexOf(filter) > -1 ||
            companyList[i].state.toUpperCase().indexOf(filter) > -1 || companyList[i].country.toUpperCase().indexOf(filter) > -1 ||
            companyList[i].duns.toUpperCase().indexOf(filter) > -1 || companyList[i].type.toUpperCase().indexOf(filter) > -1)
            matchedCompanies.push(companyList[i]);

    }

    renderCompany(matchedCompanies);
}


//Add Functions
function addHtmlTableRow() {

    var name = document.getElementById("nametxt").value;
    for (var j = 0; j < companyList.length; j++)
        if (name == companyList[j].name) {
            alert("Company Name already exists");

        }


    if (name == "" || name.length < 2 || name.length > 50) {
        alert("This is not a valid Name");
        return false;
    }

    var email = document.getElementById("emailtxt").value;
    if (email == "") {
        alert("This is not a valid Email Address");
        return false;
    }
    var phone = document.getElementById("phonetxt").value;
    if (phone == "" || phone.length < 10) {
        alert("This is not a valid Phone number");
        return false;
    }
    var owner = document.getElementById("ownertxt").value;
    if (owner == "") {
        alert("Owner must be filled out");
        return false;
    }
    var street = document.getElementById("streetxt").value;
    if (street == "") {
        alert("Street must be filled out");
        return false;
    }
    var city = document.getElementById("citytxt").value;
    if (city == "") {
        alert("City must be filled out");
        return false;
    }
    var state = document.getElementById("statetxt").value;
    if (state == "") {
        alert("State must be filled out");
        return false;
    }
    var country = document.getElementById("countrytxt").value;
    if (country == "") {
        alert("Country must be filled out");
        return false;
    }
    var duns = document.getElementById("dunstxt").value;
    if (duns == "") {
        alert("DUNS must be filled out");
        return false;
    }
    if (document.getElementById('typetxt1').checked)
        var type = document.getElementById("typetxt1").value;
    else
        if (document.getElementById('typetxt2').checked)
            var type = document.getElementById("typetxt2").value;
    if (type == "") {
        alert("Type must be filled out");
        return false;
    }


    var newCompany = new company(name, email, phone, owner, street, city, state, country, duns, type);



    companyList.push(newCompany);
    renderCompany(companyList);
    localStorage.setItem('companyList', JSON.stringify(companyList));

    document.getElementById("nametxt").value = '';
    document.getElementById("emailtxt").value = '';
    document.getElementById("phonetxt").value = '';
    document.getElementById("ownertxt").value = '';
    document.getElementById("streetxt").value = '';

    document.getElementById("citytxt").value = '';
    document.getElementById("statetxt").value = '';
    document.getElementById("countrytxt").value = '';
    document.getElementById("dunstxt").value = '';



    closeAddPopup()



}
function add_popup() {

    var popup_add = document.getElementById("popup_addbtn");
    popup_add.classList.add("show");

}
function closeAddPopup() {

    var popup = document.getElementById("popup_addbtn");
    popup.classList.remove("show");

}


/* Delete functions */
var val;
function del_popup(ind) {
    var popup = document.getElementById("popup_deletebtn");
    popup.classList.add("show");
    val = ind;


}
function yesSelection() {

    deleteCompany(val);
}
function deleteCompany(i) {


    companyList.splice(i, 1);
    localStorage.setItem('companyList', JSON.stringify(companyList));

    renderCompany(companyList);
    closePopupdel();

}
function closePopupdel() {

    var popup = document.getElementById("popup_deletebtn");
    popup.classList.remove("show");

}

/*Edit Functions*/
var selectedRow;
function selectedRowToInput2(i) {
    selectedRow = i;
    var popup = document.getElementById("edit_popup");
    popup.classList.add("show");


    document.getElementById("nametxt1").value = companyList[i].name;
    document.getElementById("emailtxt1").value = companyList[i].email;
    document.getElementById("phonetxt1").value = companyList[i].phone;
    document.getElementById("ownertxt1").value = companyList[i].owner;
    document.getElementById("streetxt1").value = companyList[i].street;
    document.getElementById("citytxt1").value = companyList[i].city;
    document.getElementById("statetxt1").value = companyList[i].state;
    document.getElementById("countrytxt1").value = companyList[i].country;
    document.getElementById("dunstxt1").value = companyList[i].duns;
    document.getElementById("typetxt3").value = companyList[i].type;


}
function editHtmlTbleSelectedRow() {

    var name = document.getElementById("nametxt1").value;
    if (name == "" || name.length < 2 || name.length > 50) {
        alert("This is not a valid Name");
        return false;
    }
    var email = document.getElementById("emailtxt1").value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    var phone = document.getElementById("phonetxt1").value;
    if (phone == "" || phone.length < 10) {
        alert("This is not a valid Phone number");
        return false;
    }
    var owner = document.getElementById("ownertxt1").value;
    if (owner == "") {
        alert("Owner must be filled out");
        return false;
    }
    var street = document.getElementById("streetxt1").value;
    if (street == "") {
        alert("Street must be filled out");
        return false;
    }
    var city = document.getElementById("citytxt1").value;
    if (city == "") {
        alert("City must be filled out");
        return false;
    }
    var state = document.getElementById("statetxt1").value;
    if (state == "") {
        alert("State must be filled out");
        return false;
    }
    var country = document.getElementById("countrytxt1").value;
    if (country == "") {
        alert("Country must be filled out");
        return false;
    }
    var duns = document.getElementById("dunstxt1").value;
    if (duns == "") {
        alert("DUNS must be filled out");
        return false;
    }
    var type = document.getElementById("typetxt3").value;
    if (type == "") {
        alert("Type must be filled out");
        return false;
    }


    companyList[selectedRow].name = document.getElementById("nametxt1").value;
    companyList[selectedRow].email = document.getElementById("emailtxt1").value;
    companyList[selectedRow].phone = document.getElementById("phonetxt1").value;
    companyList[selectedRow].owner = document.getElementById("ownertxt1").value;
    companyList[selectedRow].street = document.getElementById("streetxt1").value;
    companyList[selectedRow].city = document.getElementById("citytxt1").value;
    companyList[selectedRow].state = document.getElementById("statetxt1").value;
    companyList[selectedRow].country = document.getElementById("countrytxt1").value;
    companyList[selectedRow].duns = document.getElementById("dunstxt1").value;
    companyList[selectedRow].type = document.getElementById("typetxt3").value;


    selectedRow = '';

    document.getElementById("nametxt1").value = '';
    document.getElementById("emailtxt1").value = '';
    document.getElementById("phonetxt1").value = '';
    document.getElementById("ownertxt1").value = '';
    document.getElementById("streetxt1").value = '';

    document.getElementById("citytxt1").value = '';
    document.getElementById("statetxt1").value = '';
    document.getElementById("countrytxt1").value = '';
    document.getElementById("dunstxt1").value = '';

    document.getElementById("typetxt3").value = '';


    localStorage.setItem('companyList', JSON.stringify(companyList));
    renderCompany(companyList);
    closePopupedit();

}

function jumpTo(x) {

    if (document.country.jumpmenu.value != "null") {
        document.getElementbyId("countrytxt1").innerHTML = x
        return x;
    }




    if (document.state.jumpmenu.value != "null") {
        document.getElementbyId("statetxt1").innerHTML = x
        return x;
    }
}


function closePopupedit() {

    var popup = document.getElementById("edit_popup");
    popup.classList.remove("show");

}
