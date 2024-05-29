import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {
    
    var profile: Profile = {
      email: 'contato@juniornascimento.com.br',
      name: 'Júnior Nasciimento',
      whatsApp: 'https://api.whatsapp.com/send?phone=5584981035313&text=Ol%C3%A1%20,%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
      linkedIn: 'https://www.linkedin.com/in/junior-nascimento-3810662aa/'
    }

    return profile;
  }
}
