export const ADD_SLOT="ADD_SLOT";
export const DELETE_SLOT="DELETE_SLOT";
export const EXTEND_SLOT="EXTEND_SLOT";

export function addSlot(slot)
{
	return{
		type:'ADD_SLOT',
		payload: slot
	}
}

export function deleteSlot(slotId)
{
	return{
		type:'DELETE_SLOT',
		payload: slotId
	}
}
export function extendSlot()
{
	return{
		type:'EXTEND_SLOT',
		
	}
}