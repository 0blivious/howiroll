import insertCard from '../../modules/insert-card';
import updateCard from '../../modules/update-card';

Meteor.methods({
	insertCharacterCards( card ) {
		check(card, [Match.Any]);
		try {
			insertCard( card );
		} catch ( exception ) {
			throw new Meteor.Error( '500', `${ exception }` );
		}
	},
});