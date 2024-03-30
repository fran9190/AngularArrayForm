import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-nueva-habilidad',
	templateUrl: './nueva-habilidad.component.html',
	styleUrl: './nueva-habilidad.component.css'
})
export class NuevaHabilidadComponent implements OnInit {

	constructor(private fb: FormBuilder) {

	}

	ngOnInit(): void {

		this.addHabilidad();

	}

	get categoria() {
		return this.newHabilidadForm.get('categoria') as FormControl;
	}

	get habilidades() {
		return this.newHabilidadForm.controls['habilidades'] as FormArray;
	}

	newHabilidadForm = this.fb.group({

		categoria: new FormControl('', Validators.required),
		habilidades: this.fb.array([])

	});

	addHabilidad() {

		const habilidadForm = this.fb.group({

			name: ['', Validators.required],
			from: ['', Validators.required],
			to: [''],
			tonow: ['']

		});

		this.habilidades.push(habilidadForm);
	}

	deleteHabilidad(habilidadIndex: number) {

		this.habilidades.removeAt(habilidadIndex);

	}
	
}
