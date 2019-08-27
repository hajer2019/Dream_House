import React from "react";

function Search() {
return (
<div className="">



<div className="advance-search "><h3 className="search-heading">
<i className="fa fa-search"></i>Recherche Rapide</h3>
<div className="as-form-wrap">
<form className="advance-search-form clearfix" action="#"method="get"><div className="option-bar large">
     <label for="location">Ville</label> <span className="selectwrap">
<input id="location_input" type="text" className="selectbox" autocomplete="off" readonly="readonly" />
<div id="location_container" >
<ul><li id="location_input_any" className="selected">Any</li>
<li id="location_input_la-soukra">La Soukra</li>
<li id="location_input_la-marsa">La Marsa</li>
<li id="location_input_jardins-de-carthage">Jardins de Carthage</li>
<li id="location_input_laouina">L'Aouina</li>
<li id="location_input_ain-zaghaoun">Ain zaghaoun</li>
<li id="location_input_cite-ennasr">Cité Ennasr</li>
<li id="location_input_chotrana">Chotrana</li>
<li id="location_input_ariana">Ariana</li>
<li id="location_input_riadh-andalous">Riadh Andalous</li>
<li id="location_input_les-berges-du-lac">Les Berges du Lac</li>
<li id="location_input_lac-2">Lac 2</li>
<li id="location_input_gammarth">Gammarth</li>
<li id="location_input_jardins-el-menzah">Jardins el Menzah</li>
<li id="location_input_ennasr-2">Ennasr 2</li>
<li id="location_input_centre-ville">centre ville</li>
<li id="location_input_raoued">Raoued</li>
<li id="location_input_sfax">Sfax</li>
<li id="location_input_el-manzah-9">EL Manzah 9</li>
<li id="location_input_jardins-de-laouina">Jardins de l'Aouina</li>
<li id="location_input_cite-ghazala">cite ghazala</li>
<li id="location_input_hammamet">Hammamet</li>
<li id="location_input_cite-el-ghazela">Cité el Ghazela</li>
<li id="location_input_sidi-bousaid">Sidi BouSaid</li>
<li id="location_input_centre-urbain-nord">centre urbain nord</li>
<li id="location_input_yasmine-hammamet">Yasmine Hammamet</li>
<li id="location_input_hammamet-sud">Hammamet sud</li>
<li id="location_input_el-manar">El Manar</li>
<li id="location_input_mnihla">Mnihla</li>
<li id="location_input_el-menzah-1">El menzah 1</li>
<li id="location_input_ennasr">Ennasr</li>
<li id="location_input_el-menzah-5">el Menzah 5</li>
<li id="location_input_bardo">Bardo</li>
<li id="location_input_mornaguia">Mornaguia</li>
<li id="location_input_chotrana-3">chotrana 3</li>
<li id="location_input_enkhilet">Enkhilet</li>
<li id="location_input_morneg">Morneg</li>
<li id="location_input_sidi-daoud">Sidi Daoud</li>
<li id="location_input_charguia-i">Charguia I</li>
<li id="location_input_ennahli">Ennahli</li>
<li id="location_input_menzah-4">Menzah 4</li>
<li id="location_input_kram-kheireddine">Kram kheireddine</li>
<li id="location_input_menzah-6">menzah 6</li>
<li id="location_input_manouba">Manouba</li>
<li id="location_input_cite-avicenne">Cité Avicenne</li>
<li id="location_input_el-menzeh-7">El Menzeh 7</li>
<li id="location_input_relais">Relais</li>
<li id="location_input_boumhal">boumhal</li>
<li id="location_input_borj-touil">Borj Touil</li>
<li id="location_input_el-manar-ii">El Manar II</li>
<li id="location_input_utique">Utique</li>
<li id="location_input_cite-el-khadra">cité el Khadra</li>
<li id="location_input_notre-dame">Notre dame</li>
<li id="location_input_kalaat-anadlous">Kalaat Anadlous</li>
<li id="location_input_mourouj-4">Mourouj 4</li>
<li id="location_input_sounine">Sounine</li>
<li id="location_input_bizerte">Bizerte</li>
<li id="location_input_borj-louzir">Borj Louzir</li>
<li id="location_input_ezzahra">Ezzahra</li>
<li id="location_input_hammam-chatt">Hammam Chatt</li>
<li id="location_input_rades-meliane">Rades Meliane</li>
<li id="location_input_carthage-dermech">Carthage Dermech</li>
<li id="location_input_rafraf">Rafraf</li>
<li id="location_input_ben-arous">Ben Arous</li>
<li id="location_input_les-jardins-de-soukra">les jardins de soukra</li>
<li id="location_input_khlidia">Khlidia</li>
<li id="location_input_kram-sud">Kram Sud</li>
<li id="location_input_dar-fadhal">Dar Fadhal</li>
</ul></div><select name="location" id="location" className="search-select" style="display: none;">
<option value="any" selected="selected">Any</option>
<option value="la-soukra">La Soukra</option>
<option value="la-marsa">La Marsa</option>
<option value="jardins-de-carthage">Jardins de Carthage</option>
<option value="laouina">L'Aouina</option>
<option value="ain-zaghaoun">Ain zaghaoun</option>
<option value="cite-ennasr">Cité Ennasr</option>
<option value="chotrana">Chotrana</option>
<option value="ariana">Ariana</option>
<option value="riadh-andalous">Riadh Andalous</option>
<option value="les-berges-du-lac">Les Berges du Lac</option>
<option value="lac-2">Lac 2</option>
<option value="gammarth">Gammarth</option>
<option value="jardins-el-menzah">Jardins el Menzah</option>
<option value="ennasr-2">Ennasr 2</option>
<option value="centre-ville">centre ville</option>
<option value="raoued">Raoued</option>
<option value="sfax">Sfax</option>
<option value="el-manzah-9">EL Manzah 9</option>
<option value="jardins-de-laouina">Jardins de l'Aouina</option>
<option value="cite-ghazala">cite ghazala</option>
<option value="hammamet">Hammamet</option>
< option value="cite-el-ghazela">Cité el Ghazela</option>
<option value="sidi-bousaid">Sidi BouSaid</option>
<option value="centre-urbain-nord">centre urbain nord</option>
<option value="yasmine-hammamet">Yasmine Hammamet</option>
<option value="hammamet-sud">Hammamet sud</option>
<option value="el-manar">El Manar</option>
<option value="mnihla">Mnihla</option>
<option value="el-menzah-1">El menzah 1</option>
<option value="ennasr">Ennasr</option>
<option value="el-menzah-5">el Menzah 5</option>
<option value="bardo">Bardo</option>
<option value="mornaguia">Mornaguia</option>
<option value="chotrana-3">chotrana 3</option>
<option value="enkhilet">Enkhilet</option>
<option value="morneg">Morneg</option>
<option value="sidi-daoud">Sidi Daoud</option>
<option value="charguia-i">Charguia I</option>
<option value="ennahli">Ennahli</option>
<option value="menzah-4">Menzah 4</option>
<option value="kram-kheireddine">Kram kheireddine</option>
<option value="menzah-6">menzah 6</option>
<option value="manouba">Manouba</option>
<option value="cite-avicenne">Cité Avicenne</option>
<option value="el-menzeh-7">El Menzeh 7</option>
<option value="relais">Relais</option>
<option value="boumhal">boumhal</option>
<option value="borj-touil">Borj Touil</option>
<option value="el-manar-ii">El Manar II</option>
<option value="utique">Utique</option>
<option value="cite-el-khadra">cité el Khadra</option>
<option value="notre-dame">Notre dame</option>
<option value="kalaat-anadlous">Kalaat Anadlous</option>
<option value="mourouj-4">Mourouj 4</option>
<option value="sounine">Sounine</option>
<option value="bizerte">Bizerte</option>
<option value="borj-louzir">Borj Louzir</option>
<option value="ezzahra">Ezzahra</option>
<option value="hammam-chatt">Hammam Chatt</option>
<option value="rades-meliane">Rades Meliane</option>
<option value="carthage-dermech">Carthage Dermech</option>
<option value="rafraf">Rafraf</option>
<option value="ben-arous">Ben Arous</option>
<option value="les-jardins-de-soukra">les jardins de soukra</option>
<option value="khlidia">Khlidia</option><option value="kram-sud">Kram Sud</option>
<option value="dar-fadhal">Dar Fadhal</option></select>
</span></div><div className="option-bar large"> 
<label for="child-location">Quartier</label> <span className="selectwrap">
<input id="child-location_input" type="text" className="selectbox"
autocomplete="off" readonly="readonly">
<div id="child-location_container" 
className="selectbox-wrapper" style="display: none; height: 200px;"><ul>
<li id="child-location_input_any" className="selected">Any</li>
<li id="child-location_input_cite-les-juges">Cite les juges</li>
<li id="child-location_input_cite-les-palmeraies">Cité Les Palmeraies</li>
<li id="child-location_input_bhar-lazrak">Bhar lazrak</li>
<li id="child-location_input_tunis">Tunis</li>
<li id="child-location_input_mutuelleville">- Mutuelleville</li>
<li id="child-location_input_charguia">- charguia</li>
<li id="child-location_input_charguia-2">- - charguia 2</li>
</ul></div>
<select name="child-location" id="child-location"
className="search-select" style={{display: none}}>
<option value="any" selected="selected">Any</option>
<option value="cite-les-juges">Cite les juges</option>
<option value="cite-les-palmeraies">Cité Les Palmeraies</option>
<option value="bhar-lazrak">Bhar lazrak</option>
<option value="tunis">Tunis</option>
<option value="mutuelleville">- Mutuelleville</option>
<option value="charguia">- charguia</option>
<option value="charguia-2">- - charguia 2</option>
</select> 
</div><div className="option-bar large"> 
<label for="select-status">Property Status</label> 
<span className="selectwrap">
<input id="select-status_input" type="text" className="selectbox" autocomplete="off" readonly="readonly">
<div id="select-status_container" className="selectbox-wrapper" style="display: none;">
<ul><li id="select-status_input_a-louer">A louer</li>
<li id="select-status_input_a-vendre">A vendre</li>
<li id="select-status_input_loue">Loué</li>
<li id="select-status_input_vendu">Vendu</li>
<li id="select-status_input_any" className="selected">Any</li>
</ul></div>
<select name="status" id="select-status" className="search-select" style="display: none;">
<option value="a-louer">A louer</option><option value="a-vendre">A vendre</option>
<option value="loue">Loué</option><option value="vendu">Vendu</option>
<option value="any" selected="selected">Any</option> </select> 
</span></div><div className="option-bar large"> 
<label for="select-property-type">Property Type</label> 
<span className="selectwrap"> 
<input id="select-property-type_input" type="text" className="selectbox" autocomplete="off" readonly="readonly">
<div id="select-property-type_container" className="selectbox-wrapper" style="display: none; height: 200px;">
<ul><li id="select-property-type_input_appartement"> Appartement</li>
<li id="select-property-type_input_bureau"> Bureau</li
>
<li id="select-property-type_input_commercial"> Commercial</li>
<li id="select-property-type_input_duplex"> Duplex</li>
<li id="select-property-type_input_etage-de-villa"> étage de villa</li>
<li id="select-property-type_input_fonds-de-commerce"> Fonds de commerce</li>
<li id="select-property-type_input_hotel"> Hôtel</li>
<li id="select-property-type_input_immeuble"> Immeuble</li>
<li id="select-property-type_input_kiosque"> kiosque</li>
<li id="select-property-type_input_maison"> Maison</li>
<li id="select-property-type_input_open-space"> open space</li>
<li id="select-property-type_input_rez-de-jardin"> Rez de jardin</li>
<li id="select-property-type_input_salle-des-fetes"> salle des fêtes</li>
<li id="select-property-type_input_terrain"> Terrain</li>
<li id="select-property-type_input_triplex"> Triplex</li>
<li id="select-property-type_input_villa-fr"> Villa</li>
<li id="select-property-type_input_any" className="selected">Any</li>
</ul></div>
<select name="type" id="select-property-type" className="search-select" style={{display: none}}>
    <option value="appartement"> Appartement</option>
    <option value="bureau"> Bureau</option>
    <option value="commercial"> Commercial</option>
    <option value="duplex"> Duplex</option>
    <option value="etage-de-villa"> étage de villa</option>
    <option value="fonds-de-commerce"> Fonds de commerce</option>
    <option value="hotel"> Hôtel</option>
    <option value="immeuble"> Immeuble</option>
    <option value="kiosque"> kiosque</option>
    <option value="maison"> Maison</option>
    <option value="open-space"> open space</option>
    <option value="rez-de-jardin"> Rez de jardin</option>
    <option value="salle-des-fetes"> salle des fêtes</option>
    <option value="terrain"> Terrain</option>
    <option value="triplex"> Triplex</option>
    <option value="villa-fr"> Villa</option>
    <option value="any" selected="selected">Any</option>
        </select> </span></div>
        <div className="option-bar small"> <label for="select-bedrooms">Min Beds</label> 
        <span className="selectwrap">
            <input id="select-bedrooms_input" type="text" className="selectbox" autocomplete="off" readonly="readonly" />
                <div id="select-bedrooms_container" className="selectbox-wrapper" ><ul>
                    <li id="select-bedrooms_input_1">1</li>
            <li id="select-bedrooms_input_2">2</li>
            <li id="select-bedrooms_input_3">3</li>
            <li id="select-bedrooms_input_4">4</li>
            <li id="select-bedrooms_input_5">5</li>
            <li id="select-bedrooms_input_6">6</li>
            <li id="select-bedrooms_input_7">7</li>
            <li id="select-bedrooms_input_8">8</li>
            <li id="select-bedrooms_input_9">9</li>
            <li id="select-bedrooms_input_10">10</li>
            <li id="select-bedrooms_input_any" className="selected">Any</li>
            </ul></div>
            <select name="bedrooms" id="select-bedrooms" className="search-select"style= {{display: none}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="any" selected="selected">Any</option>
                </select> </span>
                </div><div className="option-bar small"> 
                <label for="select-bathrooms">Min Baths</label> 
                <span className="selectwrap">
                    <input id="select-bathrooms_input" type="text" className="selectbox" 
                    autocomplete="off" readonly="readonly" />
                        <div id="select-bathrooms_container" className="selectbox-wrapper" style={{display: none,height: 200 }}
                   >
                            <ul><li id="select-bathrooms_input_1">1</li>
                            <li id="select-bathrooms_input_2">2</li>
                            <li id="select-bathrooms_input_3">3</li>
                            <li id="select-bathrooms_input_4">4</li>
                            <li id="select-bathrooms_input_5">5</li>
                            <li id="select-bathrooms_input_6">6</li>
                            <li id="select-bathrooms_input_7">7</li>
                            <li id="select-bathrooms_input_8">8</li>
<li id="select-bathrooms_input_9">9</li>
<li id="select-bathrooms_input_10">10</li>
<li id="select-bathrooms_input_any" className="selected">Any</li></ul></div>
<select name="bathrooms" id="select-bathrooms" className="search-select" style="display: none;">
<option value="1">1</option><option value="2">2</option><option value="3">3</option>
<option value="4">4</option><option value="5">5</option><option value="6">6</option>
<option value="7">7</option><option value="8">8</option><option value="9">9</option>
<option value="10">10</option><option value="any" selected="selected">Any</option>
</select> 
</span>
</div>
<div className="option-bar small price-for-others"> 
<label for="select-min-price">Min Price</label>
<span className="selectwrap"> 
<input id="select-min-price_input" type="text" className="selectbox" autocomplete="off" readonly="readonly">
<div id="select-min-price_container" className="selectbox-wrapper" style="display: none; height: 200px;"><ul>
    <li id="select-min-price_input_1000">1,000TND</li>
    <li id="select-min-price_input_5000">5,000TND</li>
    <li id="select-min-price_input_10000">10,000TND</li>
    <li id="select-min-price_input_50000">50,000TND</li>
    <li id="select-min-price_input_100000">100,000TND</li>
    <li id="select-min-price_input_200000">200,000TND</li>
    <li id="select-min-price_input_300000">300,000TND</li>
    <li id="select-min-price_input_400000">400,000TND</li>
    <li id="select-min-price_input_500000">500,000TND</li>
    <li id="select-min-price_input_600000">600,000TND</li>
    <li id="select-min-price_input_700000">700,000TND</li>
    <li id="select-min-price_input_800000">800,000TND</li>
    <li id="select-min-price_input_900000">900,000TND</li>
    <li id="select-min-price_input_1000000">1,000,000TND</li>
    <li id="select-min-price_input_1500000">1,500,000TND</li>
    <li id="select-min-price_input_2000000">2,000,000TND</li>
    <li id="select-min-price_input_2500000">2,500,000TND</li>
    <li id="select-min-price_input_5000000">5,000,000TND</li>
    <li id="select-min-price_input_any" className="selected">Any</li>
    </ul></div>
<select name="min-price" id="select-min-price" className="search-select" style={{display: none}}>
<option value="1000">1,000TND</option>
<option value="5000">5,000TND</option>
<option value="10000">10,000TND</option>
<option value="50000">50,000TND</option>
<option value="100000">100,000TND</option>
<option value="200000">200,000TND</option>
<option value="300000">300,000TND</option>
<option value="400000">400,000TND</option>
<option value="500000">500,000TND</option>
<option value="600000">600,000TND</option>
<option value="700000">700,000TND</option>
<option value="800000">800,000TND</option><option value="900000">900,000TND</option>
<option value="1000000">1,000,000TND</option><option value="1500000">1,500,000TND</option>
<option value="2000000">2,000,000TND</option><option value="2500000">2,500,000TND</option>
<option value="5000000">5,000,000TND</option><option value="any" selected="selected">Any</option> 
</select> 
</span></div>
<div className="option-bar small price-for-others">
        <label for="select-max-price">Max Price</label> <span className="selectwrap"> 
        <input id="select-max-price_input" type="text" className="selectbox" autocomplete="off" readonly="readonly">
            <div id="select-max-price_container" className="selectbox-wrapper" style={{display: none, height: 200}}>
                <ul><li id="select-max-price_input_5000">5,000TND</li>
<li id="select-max-price_input_10000">10,000TND</li>
<li id="select-max-price_input_50000">50,000TND</li>
<li id="select-max-price_input_100000">100,000TND</li>
<li id="select-max-price_input_200000">200,000TND</li>
<li id="select-max-price_input_300000">300,000TND</li>
<li id="select-max-price_input_400000">400,000TND</li>
<li id="select-max-price_input_500000">500,000TND</li>
<li id="select-max-price_input_600000">600,000TND</li>
<li id="select-max-price_input_700000">700,000TND</li>
<li id="select-max-price_input_800000">800,000TND</li>
<li id="select-max-price_input_900000">900,000TND</li>
<li id="select-max-price_input_1000000">1,000,000TND</li>
<li id="select-max-price_input_1500000">1,500,000TND</li>
<li id="select-max-price_input_2000000">2,000,000TND</li>
<li id="select-max-price_input_2500000">2,500,000TND</li>
<li id="select-max-price_input_5000000">5,000,000TND</li>
<li id="select-max-price_input_10000000">10,000,000TND</li>
<li id="select-max-price_input_any" className="selected">Any</li>
</ul></div>
<select name="max-price" id="select-max-price" className="search-select" style="display: none;">
    <option value="5000">5,000TND</option>
    <option value="10000">10,000TND</option>
    <option value="50000">50,000TND</option>
    <option value="100000">100,000TND</option>
    <option value="200000">200,000TND</option>
    <option value="300000">300,000TND</option>
    <option value="400000">400,000TND</option>
    <option value="500000">500,000TND</option>
    <option value="600000">600,000TND</option>
    <option value="700000">700,000TND</option>
    <option value="800000">800,000TND</option>
    <option value="900000">900,000TND</option>
    <option value="1000000">1,000,000TND</option>
    <option value="1500000">1,500,000TND</option>
    <option value="2000000">2,000,000TND</option>
    <option value="2500000">2,500,000TND</option>
    <option value="5000000">5,000,000TND</option>
    <option value="10000000">10,000,000TND</option>
    <option value="any" selected="selected">Any</option> 
    </select> </span></div><div className="option-bar small price-for-rent hide-fields"> 
    <label for="select-min-price">Min Price</label> < className="selectwrap"> 
    <input id="select-min-price-for-rent_input" type="text" className="selectbox" autocomplete="off" readonly="readonly">
        <div id="select-min-price-for-rent_container" className="selectbox-wrapper" style="display: none;">
            <ul><li id="select-min-price-for-rent_input_500">500TND</li>
            <li id="select-min-price-for-rent_input_1000">1,000TND</li>
            <li id="select-min-price-for-rent_input_2000">2,000TND</li>
            <li id="select-min-price-for-rent_input_3000">3,000TND</li>
            <li id="select-min-price-for-rent_input_4000">4,000TND</li>
            <li id="select-min-price-for-rent_input_5000">5,000TND</li>
            <li id="select-min-price-for-rent_input_7500">7,500TND</li>
            <li id="select-min-price-for-rent_input_10000">10,000TND</li>
            <li id="select-min-price-for-rent_input_15000">15,000TND</li>
            <li id="select-min-price-for-rent_input_20000">20,000TND</li>
            <li id="select-min-price-for-rent_input_25000">25,000TND</li>
            <li id="select-min-price-for-rent_input_30000">30,000TND</li>
            <li id="select-min-price-for-rent_input_40000">40,000TND</li>
            <li id="select-min-price-for-rent_input_50000">50,000TND</li>
            <li id="select-min-price-for-rent_input_75000">75,000TND</li>
            <li id="select-min-price-for-rent_input_100000">100,000TND</li>
            <li id="select-min-price-for-rent_input_any" className="selected">Any</li>
            </ul></div><select name="min-price" id="select-min-price-for-rent" className="search-select"
             disabled="disabled" style="display: none;"><option value="500">500TND</option>
             <option value="1000">1,000TND</option>
             <option value="2000">2,000TND</option>
             <option value="3000">3,000TND</option>
             <option value="4000">4,000TND</option>
             <option value="5000">5,000TND</option>
             <option value="7500">7,500TND</option>
             <option value="10000">10,000TND</option>
             <option value="15000">15,000TND</option>
             <option value="20000">20,000TND</option>
             <option value="25000">25,000TND</option>
             <option value="30000">30,000TND</option>
             <option value="40000">40,000TND</option>
             <option value="50000">50,000TND</option><option value="75000">75,000TND</option>
             <option value="100000">100,000TND</option>
            <option value="any" selected="selected">Any</option> 
            </select> </span>
            </div><div className="option-bar small price-for-rent hide-fields"> 
<label for="select-max-price">Max Price</label> <span className="selectwrap"> 
<input id="select-max-price-for-rent_input" type="text" className="selectbox" autocomplete="off" readonly="readonly">
<div id="select-max-price-for-rent_container" className="selectbox-wrapper" style="display: none;">
    <ul><li id="select-max-price-for-rent_input_1000">1,000TND</li>
    <li id="select-max-price-for-rent_input_2000">2,000TND</li>
    <li id="select-max-price-for-rent_input_3000">3,000TND</li>
    <li id="select-max-price-for-rent_input_4000">4,000TND</li>
    <li id="select-max-price-for-rent_input_5000">5,000TND</li>
    <li id="select-max-price-for-rent_input_7500">7,500TND</li>
    <li id="select-max-price-for-rent_input_10000">10,000TND</li>
    <li id="select-max-price-for-rent_input_15000">15,000TND</li>
    <li id="select-max-price-for-rent_input_20000">20,000TND</li>
    <li id="select-max-price-for-rent_input_25000">25,000TND</li>
    <li id="select-max-price-for-rent_input_30000">30,000TND</li>
    <li id="select-max-price-for-rent_input_40000">40,000TND</li>
    <li id="select-max-price-for-rent_input_50000">50,000TND</li>
    <li id="select-max-price-for-rent_input_75000">75,000TND</li>
    <li id="select-max-price-for-rent_input_100000">100,000TND</li>
    <li id="select-max-price-for-rent_input_150000">150,000TND</li>
    <li id="select-max-price-for-rent_input_any" className="selected">Any</li>
    </ul>
    </div>
    <select name="max-price" id="select-max-price-for-rent" className="search-select"
     disabled="disabled" style={{display: none}}>
    <option value="1000">1,000TND</option><option value="2000">2,000TND</option>
    <option value="3000">3,000TND</option><option value="4000">4,000TND</option>
    <option value="5000">5,000TND</option><option value="7500">7,500TND</option>
    <option value="10000">10,000TND</option><option value="15000">15,000TND</option>
    <option value="20000">20,000TND</option><option value="25000">25,000TND</option>
    <option value="30000">30,000TND</option><option value="40000">40,000TND</option>
    <option value="50000">50,000TND</option><option value="75000">75,000TND</option>
    <option value="100000">100,000TND</option><option value="150000">150,000TND</option>
    <option value="any" selected="selected">Any</option> </select> 
    </div>
    <div classNameName="option-bar"> 
    <input type="submit" value="Search" classNameName=" real-btn btn"  /></div>
    </form>
    </div> 
    </div>



</div>
);
}

export default Search;
