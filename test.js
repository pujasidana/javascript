getManufacturereList() {

		if('ABC' === this.propertyItem.propertyCat  ) {
			let mFilterList = this.referenceService.getTable('abc').filter(w => {
				if(w.propertyType) {
					let list = w.propertyType.split(',');
					if ( list.length > 1) {
						const ptype = list.find(a=> a===this.propertyItem.propertyType)
						if(ptype) { return true; }
					}

				return w.propertyType === this.propertyItem.propertyType}})
			const mCList = new Set(mFilterList.map(wc => wc.weaponCode));
			let mList = this.referenceService.getTable('mm').filter(m =>mCList.has(m.code));

			return mList;
		}

	}

	getCaliberList(code) {
		if('ABC' === this.propertyItem.propertyCat  ) {
			let mCFilterList = this.referenceService.getTable('abb').filter(w => {
				if(w.propertyType) {
					let list = w.propertyType.split(',');
					if ( list.length > 1) {
						const ptype = list.find(a=> a===this.propertyItem.propertyType)
						if(ptype && w.weaponCode === this.propertyItem.manufacturerCode) { return true; }
					}

				return (w.propertyType === this.propertyItem.propertyType && 
					w.weaponCode === this.propertyItem.manufacturerCode)}})
			const mCaliberCodeList = new Set(mCFilterList.map(wc => wc.caliberCode));
			let cList = this.referenceService.getTable('cc').filter(c =>mCaliberCodeList.has(c.code));
			const exists = caliberList.find(item=>item.code==='ZZ');
			if( (caliberList.length === 0) || !exists ){
				caliberList.push(this.referenceService.getEntry('cc', 'ZZ'));
			}
			return caliberList;
		}

	}

	getModelList() {
		if('ABC' === this.propertyItem.propertyCat  ) {
			let mCMFilterList = this.referenceService.getTable('RefArmEtrcWeponMapping').filter(w => {
				if(w.propertyType) {
					let list = w.propertyType.split(',');
					if ( list.length > 1) {
						const ptype = list.find(a=> a===this.propertyItem.propertyType)
						if(ptype && w.weaponCode === this.propertyItem.manufacturerCode && 
							w.caliberCode === this.propertyItem.caliberCode) { return true; }
					}

				return (w.propertyType === this.propertyItem.propertyType && 
					w.weaponCode === this.propertyItem.manufacturerCode && 
					w.caliberCode === this.propertyItem.caliberCode)}})
			const mCCodeList = new Set(mCMFilterList.map(wc => wc.modelCode));
			let mList = this.referenceService.getTable('mo').filter(mo =>mCMCodeList.has(mo.code));
			const exists = modelList.find(item=>item.code==='ZZ');
			if( (modelList.length === 0) || !exists ){
				modelList.push(this.referenceService.getEntry('mo', 'ZZ'));
			}
			return modelList;
		}

	}
