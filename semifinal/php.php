<?php
$email = $_POST['email'] ?? '';
$pesan = $_POST['pesan'] ?? '';

if ($email !== '' && $pesan !== '') {
  $data = ['email' => $email, 'pesan' => trim($pesan)];
  $output = "Email: {$data['email']} | Pesan: {$data['pesan']}";
  echo $output;
}
?>