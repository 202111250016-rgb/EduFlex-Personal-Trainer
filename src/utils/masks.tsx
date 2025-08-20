export function maskTelefone(value: string) {
  if (!value) return '';
  
  const cleaned = value.replace(/\D/g, '').slice(0, 11); // Remove tudo que não for dígito

  if (cleaned.length <= 10) {
    // Telefone fixo
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim().replace(/[-]$/, '');
  } else {
    // Celular
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim().replace(/[-]$/, '');
  }
}

export function maskData(value: string) {
  if (!value) return '';

  // Remove tudo que não for número e limita a 8 dígitos (DDMMYYYY)
  const cleaned = value.replace(/\D/g, '').slice(0, 8);

  if (cleaned.length <= 2) {
    // Apenas dia
    return cleaned;
  } else if (cleaned.length <= 4) {
    // Dia e mês
    return cleaned.replace(/(\d{2})(\d{0,2})/, '$1/$2');
  } else {
    // Dia, mês e ano
    return cleaned.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
  }
}