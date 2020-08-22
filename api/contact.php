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

    // Configuration et date en francais
    setlocale(LC_TIME, 'fr_FR.utf8','fra');
    $date = strftime('%A %d %B %Y, %H:%M');

    // L'adresse de destination
    $to = 'juliengabard.pros@gmail.com';

    // L'objet du mail
    $subject = 'Vous à contacter';

    // Passe à la ligne quand arriver a 70 caractères
    $msg = wordwrap($msg, 70, "\r\n");

    // Contenue du mail en HTML
    $message = '
      <html>
        <body>
          <h1>' . $lastName . ' ' . $firstName . '</h1>
          <p><strong>Le : </strong>' . $date . '</p>
          ' . $msg . '
          <p><strong>Téléphone : </strong>' . $phone . '</p>
        </body>
      </html>
    ';

    // en-tête Content-type pour l'HTML
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';

    // En-têtes additionnels
    $headers[] = 'To: juliengabard.pros@gmail.com';
    $headers[] = 'From: ' . $email;

    if (mail($to, $subject, $message, implode("\r\n", $headers))) {
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