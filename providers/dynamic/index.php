<?php
$url = "http://careselector-core.herokuapp.com/api/providers/" . $_GET["id"];
$json = file_get_contents($url);
$json_data = json_decode($json, true);

function tick($bool){
    if($bool){
        return "✓";

    }
    else{
        return "x";
    }
}

$addressString = "";

function createAddress($addressStringTemp){
    global $addressString;

    if($addressStringTemp !== ''){
        $addressString = $addressString . $addressStringTemp . ", ";
    }
    //if adress not empty 
    // add to end of adress + ,
}
createAddress($json_data["data"]["address_1"]);
createAddress($json_data["data"]["address_2"]);
createAddress($json_data["data"]["address_3"]);
createAddress($json_data["data"]["address_4"]);
createAddress($json_data["data"]["postcode"]);
$addressString = substr($addressString, 0, -2);

function image($boolean, $address){
    if($boolean){

    }
    else{
        $string = '<iframe src="http://maps.google.com/maps?q=' . $address . '&output=embed" width="380" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>';
        echo $string;
    }
}

?>

<!DOCTYPE html>

<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title><?php echo $json_data["data"]["name"]; ?> | <?php echo $addressString; ?></title>

    <!-- Bootstrap -->
    <link href="../generator_files/bootstrap.css" rel="stylesheet">
    <link href="../generator_files/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<style type="text/css"></style><style id="style-1-cropbar-clipper">/* Copyright 2014 Evernote Corporation. All rights reserved. */
.en-markup-crop-options {
    top: 18px !important;
    left: 50% !important;
    margin-left: -100px !important;
    width: 200px !important;
    border: 2px rgba(255,255,255,.38) solid !important;
    border-radius: 4px !important;
}

.en-markup-crop-options div div:first-of-type {
    margin-left: 0px !important;
}
</style></head>

<body cz-shortcut-listen="true">
<div class="container">
    <section class="intro">
        <img src="../generator_files/careselector-logo.jpg">
        <h1><?php echo $json_data["data"]["name"]; ?></h1>
        <h2><?php echo $addressString; ?></h2>
    </section>

    <h2 style="font-weight: normal" class="title">Provider Details</h2>

    <img src="<?php echo $json_data["data"]["images"][0]["thumbnail_url"]; ?>"></img>
    <?php image($json_data["data"]["images"], $addressString); ?>

<div class="col-sm-9" style="
    float: right;
">
                        <table class="table">
                                <tbody>
                                    <tr>
                                        <th>Address</th>
                                        <td class="urlTable"><?php echo $addressString; ?></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Map</th>
                                        <td><a target="_blank" href="http://www.google.co.uk/maps/?q=<?php echo $addressString; ?>">Click here</a></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td style="
    /* float: right; */
"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Website</th>
                                        <td><a target="_blank" href="http://<?php echo $json_data["data"]["website"]; ?>"><?php echo $json_data["data"]["website"]; ?></a></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>CQC Inspection</th>
                                        <td><a target="_blank" href="http://cqc.org.uk/location/<?php echo $json_data["data"]["cqc_location"]; ?>">Click here</a></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Person in charge</th>
                                        <td><?php echo $json_data["data"]["contact_name"]; ?></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Telephone number</th>
                                       
                                        <td>

                                        <script>
                                        function showDiv() {
                                        document.getElementById('welcomeDiv').style.display = "block";
                                        document.getElementById('showhide').style.display = "none";
                                        }
                                        </script>

                                    
                                        <div id="welcomeDiv"  style="display:none;" class="answer_list" > <?php echo $json_data["data"]["phone"]; ?></div>
                                        <input type="button" id="showhide" class="reveal" name="answer" value="Reveal phone number" onclick="showDiv()"></function>

                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>

    <section class="one">

            <div class="col-sm-9" style="
    width: 100%;
">
               
               

                

                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th style="
    width: 100%;
">Provider Offer</th>
                                                                                                    <th></th>
                                                                                                    
                                                                                                    
                                                                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Estimated Hourly Cost</th>
                                                                                                    <td><?php echo "£" . ($json_data["data"]["price"]/100); ?></td>
                                                                                                    
                                                                                                    
                                                                                            </tr>
                                            <tr>
                                                <th>Quality Rating</th>
                                                                                                    <td><?php echo $json_data["data"]["cqc_score"]; ?>/5</td>
                                                                                                    
                                                                                                    
                                                                                            </tr>
                                            <tr>
                                                <th>Supports Dementia</th>
                                                                                                    <td><?php echo tick($json_data["data"]["service_dementia"]); ?></td>
                                                                                                    
                                                                                                    
                                                                                            </tr>
                                            <tr>
                                                <th>Supports Mental Health Issues</th>
                                                                                                    <td><?php echo tick($json_data["data"]["service_mental_health"]); ?></td>
                                                                                                    
                                                                                                    
                                                                                            </tr>
                                            <tr>
                                                <th>Supports Learning Disabilites</th>
                                                                                                    <td><?php echo tick($json_data["data"]["service_learning_disability"]); ?></td>
                                                                                                    
                                                                                                    
                                                                                            </tr>
                                            <tr>
                                                <th>Supports Sensory Impairments</th>
                                                                                                    <td><?php echo tick($json_data["data"]["service_sensory_impairment"]); ?></td>
                                                                                                    
                                                                                                    
                                                                                            </tr>
                                            <tr>
                                                <th>Available Now?</th>
                                                                                                        <td><?php echo $json_data["data"]["availability"]; ?></td>
                                                                                                      
                                                                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                <!-- Home 1 Table -->
                                
                
                                
                
                                
                
                
            </div>
            <div class="col-sm-3">

                <div></div><div></div>
            </div>

            <a href="http://careselector.com/#/compare-search/<?php echo $json_data["data"]["address_3"]; ?>/<?php echo $json_data["data"]["service_type"]; ?>"><button class="big-button">Search For Other Care Homes in <?php echo $json_data["data"]["address_3"]; ?></button></a>

            <br>
            <br>


    </section>

   

    
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="http://script.crazyegg.com/pages/scripts/0023/1266.js?398823" async="" type="text/javascript"></script><script src="http://script.crazyegg.com/pages/scripts/0023/1266.js?398822" async="" type="text/javascript"></script><script src="../generator_files/1266(2).js" async="" type="text/javascript"></script><script src="../generator_files/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../generator_files/jquery-scrolltofixed-min.js"></script><!-- For fixed widget when it hits the header -->
    <script>
        $(document).ready(function() {
                    $('#widget').scrollToFixed({
                    marginTop:10,
                    limit: $('section.three').offset().top - $('#widget').outerHeight(),
                    zIndex: 999,
                    });
                });

    </script>
    <script type="text/javascript">
    setTimeout(function(){var a=document.createElement("script");
    var b=document.getElementsByTagName("script")[0];
    a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0023/1266.js?"+Math.floor(new Date().getTime()/3600000);
    a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
    </script>


<script type="text/javascript">(function () {
        return window.SIG_EXT = {};
      })()</script></body></html>