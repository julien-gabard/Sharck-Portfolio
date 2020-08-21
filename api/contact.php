<?php
// Header
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// variable to store input errors
$errors = array();

// Verification of the fields of the contact form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Verify lastName
  if (empty($_POST['lastName'])) {
    $errors[] = 'lastName is empty';
  } else {
    $lastName = $_POST['lastName'];

    // validating lastname
    if (!filter_var($lastName, FILTER_SANITIZE_STRING)) {
      $errors[] = 'Invalid lastName';
    }
  }

  // Verify firstName
  if (empty($_POST['firstName'])) {
    $errors[] = 'firstName is empty';
  } else {
    $firstName = $_POST['firstName'];

    // validating firstName
    if (!filter_var($firstName, FILTER_SANITIZE_STRING)) {
      $errors[] = 'Invalid firstName';
    }
  }

  // Verify phone
  if (empty($_POST['phone'])) {
    $errors[] = 'phone is empty';
  } else {
    $phone = $_POST['phone'];

    // validating phone
    if (!filter_var($phone, FILTER_SANITIZE_STRING)) {
      $errors[] = 'Invalid phone';
    }
  }

  // Verify email
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];

    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = 'Invalid email';
    }
  }
  
  // Verify message
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $msg = $_POST['message'];
  }

  // Sending the email if no errors
  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
      <title>$email vous contacte</title>
    </head>
    <body style=\"background-color:#fafafa;\">
      <div style=\"padding:20px;\">
        Date: <span style=\"color:#888\">$date</span>
        <br>
        Nom: <span style=\"color:#888\>$lastName</span>
        <br>
        Prénom: <span style=\"color:#888\>$firstName</span>
        <br>
        Téléphone: <span style=\"color:#888\>$phone</span>
        <br>
        Email: <span style=\"color:#888\">$email</span>
        <br>
        Message: <div style=\"color:#888\">$msg</div>
      </div>
    </body>
    </html>
    ";

    $to = 'juliengabard.pros@gmail.com'; // Adresse mail du destinataire
    $from = $email; // Adresse mail de l'expediteur
    $subject = 'Vous à contacter'; // Objet du mail
    $message = $emailBody; // Message du mail

    // L'en-tête content-type HTML
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // En-tête du courrier
    $headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
      $sent = true;
    }
  }
}
?>

<?php if (!empty($errors)) : ?> 
  
  {
    "status": "fail",
    "error": <?php echo json_encode($errors) ?>
  }
    
<?php endif; ?>

<?php if ($sent === true) : ?> 

{
  "status": "success",
  "message": "Message envoyer avec success"
}

<?php endif; ?>